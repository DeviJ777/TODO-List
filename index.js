const $userinput=document.getElementById('userinput');
$userinput.addEventListener('keypress',(e) =>{
    if(e.code === "Enter" && e.target.value!="")    
    {
        let todo=e.target.value;
        let $todoitem=document.createElement('li');
        let todoId=new Date().getTime();
        $todoitem.innerHTML=`<input id="${todoId}" type="checkbox"/>
        <label for="${todoId}"> ${todo}</label>`
        const $todolist=document.getElementById('todolist');
        $todolist.appendChild($todoitem);
        $userinput.value="";
        console.log($todoitem);
    }

});
$todolist=document.getElementById('todolist');
$todolist.addEventListener('click',(e)=>{
    if(e.target.checked){

    e.target.parentElement.style.textDecoration="line-through";
}
else
{
    e.target.parentElement.style.textDecoration="none";
}
});
$todolist.addEventListener('dblclick',(e)=>{
        e.target.parentElement.style.display="none";
    

});