import React, { createContext, Component } from 'react'
const FileContext = createContext({
    localfile: [],
    setloclFile: () => {}
})
export class FileProvider extends Component{
    setloclFile = (val) => {
        console.log('context.js', val)
        this.setState( {localfile: val} )
    }
    state = {
        localfile: [],
        setloclFile: this.setloclFile
    }
    render () {
        return (
            <FileContext.Provider value={this.state}>
                {this.props.children}
            </FileContext.Provider>
        )
    }
}
// export class FileConsumer extends component{
//     render () {
//         return (
//             <FileContext.Consumer>
//                 {this.props.children}
//             </FileContext.Consumer>
//         )
//     }
// }
export const FileConsumer = FileContext.Consumer