export default(text='Hello World') =>{
    const element = document.createElement('div');
    element.innerText = text;
    return element;
}