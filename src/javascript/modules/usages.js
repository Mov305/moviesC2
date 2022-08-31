import logoimg from '../../../assets/logo_transparent.png';

const setUi = () => {
  logo.src = logoimg;
  searchIcon.addEventListener('click',()=>{
    if(!searchInput.value){
      searchInput.classList.toggle('inputHide');
      inputField.classList.toggle('grow');
      inputField.classList.toggle('md:w-12');
    }else{
        searchInput.value = ''
    }
  })
};

export {setUi}