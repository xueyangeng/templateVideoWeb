import React from "react";
import { Modal, TreeSelect, Input, Radio, message } from "antd";
import PreviewCanvas from "@/components/PreviewCanvas";
import { build, get_dirList, get_userInfo } from "@/channel";
import { getTrees } from "@/utils/handy";
import "./index.scss";

export default class CreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dirList: [],
      title: this.props.config.name,
      outType: "720p",
      location: null,
    };
  }

  componentWillMount() {
    this.getLocation();
  }

  componentDidMount() {}

  componentWillUnmount() {
    // 重写组件的setState方法，直接返回空 此方法处理setState异步
    this.setState = (state, callback) => {
      return;
    };
  }
  getLocation = () => {
    get_dirList({ userGroup: 0 }).then((re) => {
      if (!re) return;
      let dirList = getTrees(re, 0);
      this.setState({ dirList, location: re[0] && re[0].id });
    });
  };

  // 名字改变
  changeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  // 分辨率改变
  changeOutType = (e) => {
    this.setState({ outType: e.target.value });
  };
  // 修改保存位置
  changeLocation = (value) => {
    this.setState({ location: value });
  };

  // 生成视频
  create = () => {
    const { title, outType, location } = this.state;
    const { config } = this.props;
    if (!title || !outType || !location) {
      message.warning("请选择信息");
      return;
    }
    build({ title, outType, location, projectId: config.id }).then((re) => {
      message.success("生成成功");
      this.props.closeVisible();
    });

    get_userInfo({}).then((re) => {
      // 埋点
      window.sensors &&
        window.sensors.track("cut_generate", {
          userName: re.username,
          tenantName: re.tenantName,
          videoName: title,
          videoClarity: outType,
          videoDuration: config.duration || 0,
        });
    });
  };

  render() {
    const { closeVisible, watermark, backgroundMusic, materialList } =
      this.props;
    const { dirList, title, outType, location } = this.state;
    return (
      <React.Fragment>
        <Modal
          wrapClassName="createModal"
          visible={true}
          onOk={this.create}
          onCancel={closeVisible}
          centered
          destroyOnClose
          title="生成视频"
        >
          <div className="createModal-left">
            <PreviewCanvas
              materialList={materialList}
              closeVisible={closeVisible}
              watermark={watermark}
              backgroundMusic={backgroundMusic}
              hideTitle={true}
            />
          </div>
          <div className="createModal-right">
            <div>
              <label>标题</label>
              <Input
                value={title}
                maxLength={50}
                onChange={this.changeTitle}
              ></Input>
            </div>
            <div>
              <label>清晰度</label>
              <Radio.Group value={outType} onChange={this.changeOutType}>
                <Radio.Button value="480p">480P</Radio.Button>
                <Radio.Button value="720p">720P</Radio.Button>
                <Radio.Button value="1080p">1080P</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <label>保存位置</label>
              <TreeSelect
                value={location}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                treeDefaultExpandedKeys={
                  dirList && dirList[0] && [dirList[0].value]
                }
                treeData={dirList}
                onChange={(value, title) => {
                  this.setState({ location: value });
                }}
              ></TreeSelect>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
