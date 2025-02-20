onmessage = (e) => {
    const type = e.data[0];
    const file = e.data[1];

    let data;

    switch (type) {
        case 'get_file_info':
            // Mount FS for files.
            if (!FS.analyzePath('/work').exists) {
                FS.mkdir('/work');
            }
            FS.mount(WORKERFS, { files: [file] }, '/work');

            // Call the wasm module.
            const info = Module.get_file_info('/work/' + file.name);

            // Remap streams into collection.
            const s = [];
            for (let i = 0; i < info.streams.size(); i++) {
                s.push(info.streams.get(i));
            }

            const versions = {
                libavutil:  Module.avutil_version(),
                libavcodec:  Module.avcodec_version(),
                libavformat:  Module.avformat_version(),
            };
            console.log(Module)
            // Send back data response.
            data = {
                ...info,
                streams: s,
                versions,
            }
            postMessage(data);

            // Cleanup mount.
            FS.unmount('/work');
            break;
        
        case 'get_frames':
            if (!FS.analyzePath('/work').exists) {
                FS.mkdir('/work');
            }
            FS.mount(WORKERFS, { files: [file] }, '/work');

            const offset = e.data[2];
            const frames = Module.get_frames('/work/' + file.name, offset);

            // Remap frames into collection.
            const f = [];
            for (let i = 0; i < frames.frames.size(); i++) {
                f.push(frames.frames.get(i));
            }

            data = {
                ...frames,
                frames: f,
            }
            postMessage(data);

            // Cleanup mount.
            FS.unmount('/work');
            break;
    
        default:
            break;
    }

}
self.importScripts('ffprobe-wasm.js'); // Load ffprobe into worker context.