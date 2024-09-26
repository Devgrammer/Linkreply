import {injectExtensionIcon} from '../entrypoints/popup/utilities/utilMethod';

export default defineContentScript({
    matches: ['*://www.linkedin.com/messaging/*'],
    main() {
        console.log('Process initiated, content script isd triggered');

        const analyser =  new MutationObserver(()=>{
            console.log('Analysing the message input field');

            const messageField = document.querySelector(".msg-form__contenteditable");
            console.log("messagefield", messageField); 
            if(messageField){
                injectExtensionIcon(messageField);
                analyser.disconnect();
            }
        })

        analyser.observe(document.body, {childList: true, subtree:true});
    },
});



chrome.runtime.onMessage.addListener;((message, _sender, sendResponse)=>{
    if(message.from === "insert-btn"){
        const messageTextField = document.querySelector(".msg-form__contenteditable");
        if(messageTextField){
            (messageTextField as HTMLElement).focus();
            document.execCommand('insertResponseText', false, message.text);
            sendResponse({status: 'success'})
        }else{
            sendResponse({status: 'failed', reason:'Message input field is not available now'});
        }
    }

});

const tailwindCSSInjection =()=>{
    const tailwindConnection = document.createElement('link');
    tailwindConnection.rel = 'stylesheet';
    tailwindConnection.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
    document.head.appendChild(tailwindConnection);

}

tailwindCSSInjection();



