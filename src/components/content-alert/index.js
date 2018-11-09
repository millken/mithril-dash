import stream from 'mithril/stream';

var wait1000 =  ()=> new Promise((resolve, reject)=> {setTimeout(resolve, 1000)});


const Component = {
    message: stream(''),
    msgType: stream(''),
    reset:() => {
        setTimeout(function(){Component.msgType='';}, 5000);
    },
    setError:(msg) => {
        Component.msgType = 'alert-danger';
        Component.message = msg;
        //Component.reset();
        
    },
    setInfo:(msg) => {
        Component.msgType = 'alert-info';
        Component.message = msg;
        Component.reset();
    },
    setWarning:(msg) => {
        Component.msgType = 'alert-warning';
        Component.message = msg;
        Component.reset();
    },
    view: () => {

        return Component.msgType  !== '' ?  m('div', {className: 'alert '+ Component.msgType}, Component.message) : m('');
    },
};

export default Component;