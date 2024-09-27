import React from 'react'
import AIReplyButton from '../component/buttonVariants/aiReplyButton/AIReplyButton';
import AIPromptModal from '../component/aiPromptModal/AIPromptModal';
import { createRoot } from 'react-dom/client';

export const injectExtensionIcon = (messageField: Element) => {
const aiIconContainer = createAIIconContainer();
aiIconContainer.parentElement?.appendChild(aiIconContainer);

addFocusPlusBlurListeners(messageField, aiIconContainer);
addIconClickListener(aiIconContainer)

const  rootElement = createRoot(aiIconContainer);
rootElement.render(React.createElement(AIReplyButton));

};

  function createAIIconContainer(): HTMLDivElement {
   const aiIconContainer = document.createElement('div');
   aiIconContainer.id = 'ai-button-container';
   Object.assign(aiIconContainer.style,{
      width: '25px',
      height: '25px',
      position: 'absolute',
      right: '10px',
      bottom: '5px',
      zIndex: '1000',
      backgroundColor: 'white',
      borderRadius: '100%',
      padding: '5px',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
   });

   return aiIconContainer

};


const addFocusPlusBlurListeners =(messageField: Element, aiIconContainer: HTMLDivElement)=>{
  messageField.addEventListener('focus', (e)=>{
    aiIconContainer.style.display = 'flex';
    e.stopPropagation();
  });

  messageField.addEventListener('blur', (e: Event)=>{
  const targetElement = (e as FocusEvent).relatedTarget as Node | null;
  if(!(messageField.contains(targetElement) || aiIconContainer.contains(targetElement))){
    aiIconContainer.style.display = 'none';
  }
  });
};


const addIconClickListener = (aiIconContainer: HTMLDivElement) =>{
  aiIconContainer.addEventListener('click', (e)=>{
    e.preventDefault();
    aiIconContainer.style.display = 'none';
     const modalFormContainer = createModalFormContainer();
     document.body.appendChild(modalFormContainer);

     const closeModal = () =>{
      modalFormContainer.remove();
     }

     const rootModal = createRoot(modalFormContainer);
     rootModal.render(React.createElement(AIPromptModal, {closeModal}));
  })
};


function createModalFormContainer(): HTMLDivElement {
  const modalFormContainer  = document.createElement('div');
   modalFormContainer.id = 'prompt-modal-container';
   Object.assign(modalFormContainer.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      width: '100%',
      zIndex: '1000',
   });

   return modalFormContainer;

}

