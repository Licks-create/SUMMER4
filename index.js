let angle=0,f=0;
expand=.664667
let frames=[
    {class:".frame1",expand:`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1.25e-05, 0, -10, 353, ${expand})`,back:`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -10, 400, 1)`},
    
    {class:".frame2",expand:`matrix3d(0.5, 0, 0.866025, 0, 0, 1, 0, 0, -0.866025, 0, 0.5, 0, -346.41, -10, 200, ${expand})`,back:'matrix3d(0.5, 0, 0.866025, 0, 0, 1, 0, 0, -0.866025, 0, 0.5, 0, -346.41, -10, 200, 1)'},
    // matrix3d(0.5, 0, 0.866025, 0, 0, 1, 0, 0, -0.866025, 0, 0.5, 0, -346.41, -10, 200, 1)

    {class:".frame3",expand:`matrix3d(-0.5, 0, 0.866025, 0, 0, 1, 0, 0, -0.866025, 0, -0.5, 0, -346.41, -10, -200, ${expand})`,back:`matrix3d(-0.5, 0, 0.866025, 0, 0, 1, 0, 0, -0.866025, 0, -0.5, 0, -346.41, -10, -200, 1)`},

    {class:".frame4",expand:`matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -10, -400, ${expand})`,back:`matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -10, -400, 1)`},

    {class:".frame5",expand:`matrix3d(-0.5, 0, -0.866025, 0, 0, 1, 0, 0, 0.866025, 0, -0.5, 0, 346.41, -10, -200, ${expand})`,back:`matrix3d(-0.5, 0, -0.866025, 0, 0, 1, 0, 0, 0.866025, 0, -0.5, 0, 346.41, -10, -200, 1)`},

    {class:".frame6",expand:`matrix3d(0.5, 0, -0.866025, 0, 0, 1, 0, 0, 0.866025, 0, 0.5, 0, 346.41, -10, 200, ${expand})`,back:`matrix3d(0.5, 0, -0.866025, 0, 0, 1, 0, 0, 0.866025, 0, 0.5, 0, 346.41, -10, 200, 1)`}

]
workingObject=frames[f];
    workingClass=document.querySelector(workingObject.class);
    workingClass.style.transform=workingObject.expand
    workingClass.style.filter="brightness(100%)"
console.log(workingObject.expand)
document.querySelector('input[value="next"]').onclick=function name(e){
    // console.log('clicked');
    angle+=60;
    document.querySelector('.frame').style.setProperty('--angle',angle+'deg')
    
    
    let workingObject=frames[f];
    let workingClass=document.querySelector(workingObject.class);
    workingClass.style.setProperty('transform',workingObject.back)
    workingClass.style.filter="brightness(40%)"
    
    
    
    f++;
    if(f>5)
    f=f%6;
    console.log(f)
    
    workingObject=frames[f];
    workingClass=document.querySelector(workingObject.class);
    workingClass.style.filter="brightness(100%)"
    console.log(workingClass)
    workingClass.style.transform=workingObject.expand
}   