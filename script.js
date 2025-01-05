    function changeColor()
    {
        const PageTitle = document.getElementById('title-label');
        const profilepic1 = document.getElementById('profile-pic-1');
        const tableheader = document.getElementById('table-header');

        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate random color
        PageTitle.style.backgroundColor = randomColor;
        profilepic1.style.borderColor = randomColor;
        tableheader.style.backgroundColor = randomColor;
        
    }