function darkMode(){
    document.body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', function(){
    const isDark = document.body.classList.contains('dark-mode');
    if(isDark){
        document.body.classList.add('dark-mode');
    }
});