
let message = ''
let msgType = ''

const Component = {
    reset:() => {
        setTimeout(function(){msgType='';m.redraw();}, 5000);
    },
    setError:(msg) => {
        msgType = 'alert-danger';
        message = msg;
        Component.reset();
        
    },
    setInfo:(msg) => {
        msgType = 'alert-info';
        message = msg;
        Component.reset();
    },
    setWarning:(msg) => {
        msgType = 'alert-warning';
        message = msg;
        Component.reset();
    },
    view: () => {

    return msgType  !== ''  &&  m('div', {className: 'alert '+ msgType}, message)
    }
};

export default Component;