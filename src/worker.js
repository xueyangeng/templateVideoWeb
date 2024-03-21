const list = []
onmessage = function(e) {
  console.log('%c onmessage', "color: #ff8d18", e.data)
  const {type, value} = e.data
  if (!type) {
    return false
  }
  switch (type) {
    case 'start':
      postMessage({type: 'start', value})
      break;
    case 'retry':
      postMessage({type: 'retry', value})
      break;

    case 'ready':
      break;

    
    case 'add':
      break;
    case 'list':
      postMessage({type: 'list', value: list})
      break;


    case 'append':
      list.push(JSON.parse(value))
  console.log('list', list)
      postMessage({type: 'list', value: list})
      break;
      

    case 'finish':
      break;


      
    case 'success':
      break;
    case 'saveError':
      break;
    case 'saveSuccess':
      // success
      break;
    case 'uploadError':
      // success
      break;
    case 'uploading':
      // success
      break;
    case 'complete':
      // success
      break;
      
    default:
      break;
  }
}
