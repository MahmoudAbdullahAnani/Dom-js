let hedar = document.createElement('div');
let logo = document.createElement('p');
logo.textContent = 'Elzero'
let ullinks = document.createElement('ul');

let liLinks1 = document.createElement('li')
let liLinks2 = document.createElement('li')
let liLinks3 = document.createElement('li')
let liLinks4 = document.createElement('li')
liLinks1.textContent = 'Home'
liLinks2.textContent = 'About'
liLinks3.textContent = 'Service'
liLinks4.textContent = 'Contact'
hedar.prepend(logo) // logo > div
// li > ul
ullinks.appendChild(liLinks1);
ullinks.appendChild(liLinks2);
ullinks.appendChild(liLinks3);
ullinks.appendChild(liLinks4);
// ul > div
hedar.appendChild(ullinks)
document.body.appendChild(hedar) // div > body
//style body
document.body.style.backgroundColor = '#ececec'
// style hedar
// style div

hedar.style.backgroundColor= 'White'
hedar.style.borderRadius= '7px'
hedar.style.display ='flex'
hedar.style.justifyContent= 'space-between'

// style logo
// logo.style.display = 'inline'
logo.style.marginLeft='5px'
logo.style.color='#0b9581'
logo.style.fontFamily='Arial, Helvetica, sans-serif'
// logo.style.fontSize= '24px'
logo.style.fontWeight = '700'


//style ul
ullinks.style.display = 'inline-flex'
ullinks.setAttribute("type", 'none')

//style li
liLinks1.style.fontFamily='Arial, Helvetica, sans-serif'
liLinks2.style.fontFamily='Arial, Helvetica, sans-serif'
liLinks3.style.fontFamily='Arial, Helvetica, sans-serif'
liLinks4.style.fontFamily='Arial, Helvetica, sans-serif'
liLinks1.style.opacity= '.8'
liLinks2.style.opacity= '.8'
liLinks3.style.opacity= '.8'
liLinks4.style.opacity= '.8'
liLinks1.style.marginLeft= '15px'
liLinks2.style.marginLeft= '15px'
liLinks3.style.marginLeft= '15px'
liLinks4.style.marginLeft= '15px'
liLinks4.style.marginRight= '15px'

// body for project
// creare 15 div
let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')
let div4 = document.createElement('div')
let div5 = document.createElement('div')
let div6 = document.createElement('div')
let div7 = document.createElement('div')
let div8 = document.createElement('div')
let div9 = document.createElement('div')
let div10 = document.createElement('div')
let div11 = document.createElement('div')
let div12 = document.createElement('div')
let div13 = document.createElement('div')
let div14 = document.createElement('div')
let div15 = document.createElement('div')
// create 15 p
let numP1 = document.createElement('p')
let numP2 = document.createElement('p')
let numP3 = document.createElement('p')
let numP4 = document.createElement('p')
let numP5 = document.createElement('p')
let numP6 = document.createElement('p')
let numP7 = document.createElement('p')
let numP8 = document.createElement('p')
let numP9 = document.createElement('p')
let numP10 = document.createElement('p')
let numP11 = document.createElement('p')
let numP12 = document.createElement('p')
let numP13 = document.createElement('p')
let numP14 = document.createElement('p')
let numP15 = document.createElement('p')
// create 15 p
let textP1 = document.createElement('p')
let textP2 = document.createElement('p')
let textP3 = document.createElement('p')
let textP4 = document.createElement('p')
let textP5 = document.createElement('p')
let textP6 = document.createElement('p')
let textP7 = document.createElement('p')
let textP8 = document.createElement('p')
let textP9 = document.createElement('p')
let textP10 = document.createElement('p')
let textP11 = document.createElement('p')
let textP12 = document.createElement('p')
let textP13 = document.createElement('p')
let textP14 = document.createElement('p')
let textP15 = document.createElement('p')

// text content for numP
numP1.textContent='1'
numP2.textContent='2'
numP3.textContent='3'
numP4.textContent='4'
numP5.textContent='5'
numP6.textContent='6'
numP7.textContent='7'
numP8.textContent='8'
numP9.textContent='9'
numP10.textContent='10'
numP11.textContent='11'
numP12.textContent='12'
numP13.textContent='13'
numP14.textContent='14'
numP15.textContent='15'
// text content for textP
textP1.textContent='Product'
textP2.textContent='Product'
textP3.textContent='Product'
textP4.textContent='Product'
textP5.textContent='Product'
textP6.textContent='Product'
textP7.textContent='Product'
textP8.textContent='Product'
textP9.textContent='Product'
textP10.textContent='Product'
textP11.textContent='Product'
textP12.textContent='Product'
textP13.textContent='Product'
textP14.textContent='Product'
textP15.textContent='Product'
// append numeP and textP for div father
div1.appendChild(numP1)
div1.appendChild(textP1)

div2.appendChild(numP2)
div2.appendChild(textP2)

div3.appendChild(numP3)
div3.appendChild(textP3)

div4.appendChild(numP4)
div4.appendChild(textP4)

div5.appendChild(numP5)
div5.appendChild(textP5)

div6.appendChild(numP6)
div6.appendChild(textP6)

div6.appendChild(numP6)
div6.appendChild(textP6)

div6.appendChild(numP6)
div6.appendChild(textP6)

div7.appendChild(numP7)
div7.appendChild(textP7)

div8.appendChild(numP8)
div8.appendChild(textP8)

div9.appendChild(numP9)
div9.appendChild(textP9)

div10.appendChild(numP10)
div10.appendChild(textP10)

div11.appendChild(numP11)
div11.appendChild(textP11)

div12.appendChild(numP12)
div12.appendChild(textP12)

div13.appendChild(numP13)
div13.appendChild(textP13)

div14.appendChild(numP14)
div14.appendChild(textP14)

div15.appendChild(numP15)
div15.appendChild(textP15)
//create row divs
let rowdiv1 = document.createElement('div')
let rowdiv2 = document.createElement('div')
let rowdiv3 = document.createElement('div')
let rowdiv4 = document.createElement('div')
let rowdiv5 = document.createElement('div')
//push divs for row divs
//for row one
rowdiv1.appendChild(div1)
rowdiv1.appendChild(div2)
rowdiv1.appendChild(div3)
//for row two
rowdiv2.appendChild(div4)
rowdiv2.appendChild(div5)
rowdiv2.appendChild(div6)
//for row three
rowdiv3.appendChild(div7)
rowdiv3.appendChild(div8)
rowdiv3.appendChild(div9)
//for row fur
rowdiv4.appendChild(div10)
rowdiv4.appendChild(div11)
rowdiv4.appendChild(div12)
//for row fife
rowdiv5.appendChild(div13)
rowdiv5.appendChild(div14)
rowdiv5.appendChild(div15)
// push divs for body
document.body.appendChild(rowdiv1)
document.body.appendChild(rowdiv2)
document.body.appendChild(rowdiv3)
document.body.appendChild(rowdiv4)
document.body.appendChild(rowdiv5)
// style divs and rowdivs
rowdiv1.style.display='flex'
rowdiv2.style.display='flex'
rowdiv3.style.display='flex'
rowdiv4.style.display='flex'
rowdiv5.style.display = 'flex'
//justify-content: space-between;
rowdiv1.style.justifyContent='space-between'
rowdiv2.style.justifyContent='space-between'
rowdiv3.style.justifyContent='space-between'
rowdiv4.style.justifyContent='space-between'
rowdiv5.style.justifyContent = 'space-between'
// text-align: center;
rowdiv1.style.textAlign='center'
rowdiv2.style.textAlign='center'
rowdiv3.style.textAlign='center'
rowdiv4.style.textAlign='center'
rowdiv5.style.textAlign = 'center'
//color style

div1.style.marginTop='15px'
div2.style.marginTop='15px'
div3.style.marginTop='15px'
div4.style.marginTop='15px'
div5.style.marginTop='15px'
div6.style.marginTop='15px'
div7.style.marginTop='15px'
div8.style.marginTop='15px'
div9.style.marginTop='15px'
div10.style.marginTop='15px'
div11.style.marginTop='15px'
div12.style.marginTop='15px'
div13.style.marginTop='15px'
div14.style.marginTop='15px'
div15.style.marginTop='15px'

div1.style.backgroundColor='White'
div2.style.backgroundColor='White'
div3.style.backgroundColor='White'
div4.style.backgroundColor='White'
div5.style.backgroundColor='White'
div6.style.backgroundColor='White'
div7.style.backgroundColor='White'
div8.style.backgroundColor='White'
div9.style.backgroundColor='White'
div10.style.backgroundColor='White'
div11.style.backgroundColor='White'
div12.style.backgroundColor='White'
div13.style.backgroundColor='White'
div14.style.backgroundColor='White'
div15.style.backgroundColor = 'White'

div1.style.borderRadius='6px'
div2.style.borderRadius='6px'
div3.style.borderRadius='6px'
div4.style.borderRadius='6px'
div5.style.borderRadius='6px'
div6.style.borderRadius='6px'
div7.style.borderRadius='6px'
div8.style.borderRadius='6px'
div9.style.borderRadius='6px'
div10.style.borderRadius='6px'
div11.style.borderRadius='6px'
div12.style.borderRadius='6px'
div13.style.borderRadius='6px'
div14.style.borderRadius='6px'
div15.style.borderRadius = '6px'

div1.style.paddingLeft='80px'
div2.style.paddingLeft='80px'
div3.style.paddingLeft='80px'
div4.style.paddingLeft='80px'
div5.style.paddingLeft='80px'
div6.style.paddingLeft='80px'
div7.style.paddingLeft='80px'
div8.style.paddingLeft='80px'
div9.style.paddingLeft='80px'
div10.style.paddingLeft='80px'
div11.style.paddingLeft='80px'
div12.style.paddingLeft='80px'
div13.style.paddingLeft='80px'
div14.style.paddingLeft='80px'
div15.style.paddingLeft = '80px'

div1.style.paddingRight='80px'
div2.style.paddingRight='80px'
div3.style.paddingRight='80px'
div4.style.paddingRight='80px'
div5.style.paddingRight='80px'
div6.style.paddingRight='80px'
div7.style.paddingRight='80px'
div8.style.paddingRight='80px'
div9.style.paddingRight='80px'
div10.style.paddingRight='80px'
div11.style.paddingRight='80px'
div12.style.paddingRight='80px'
div13.style.paddingRight='80px'
div14.style.paddingRight='80px'
div15.style.paddingRight = '80px'

div1.style.width='20%'
div2.style.width='20%'
div3.style.width='20%'
div4.style.width='20%'
div5.style.width='20%'
div6.style.width='20%'
div7.style.width='20%'
div8.style.width='20%'
div9.style.width='20%'
div10.style.width='20%'
div11.style.width='20%'
div12.style.width='20%'
div13.style.width='20%'
div14.style.width='20%'
div15.style.width = '20%'
// style numeP
numP1.style.fontSize='30px'
numP2.style.fontSize='30px'
numP3.style.fontSize='30px'
numP4.style.fontSize='30px'
numP5.style.fontSize='30px'
numP6.style.fontSize='30px'
numP7.style.fontSize='30px'
numP8.style.fontSize='30px'
numP9.style.fontSize='30px'
numP10.style.fontSize='30px'
numP11.style.fontSize='30px'
numP12.style.fontSize='30px'
numP13.style.fontSize='30px'
numP14.style.fontSize='30px'
numP15.style.fontSize = '30px'
// style textP
textP1.style.fontSize='25px'
textP2.style.fontSize='25px'
textP3.style.fontSize='25px'
textP4.style.fontSize='25px'
textP5.style.fontSize='25px'
textP6.style.fontSize='25px'
textP7.style.fontSize='25px'
textP8.style.fontSize='25px'
textP9.style.fontSize='25px'
textP10.style.fontSize='25px'
textP11.style.fontSize='25px'
textP12.style.fontSize='25px'
textP13.style.fontSize='25px'
textP14.style.fontSize='25px'
textP15.style.fontSize = '25px'

textP1.style.opacity='.5'
textP2.style.opacity='.5'
textP3.style.opacity='.5'
textP4.style.opacity='.5'
textP5.style.opacity='.5'
textP6.style.opacity='.5'
textP7.style.opacity='.5'
textP8.style.opacity='.5'
textP9.style.opacity='.5'
textP10.style.opacity='.5'
textP11.style.opacity='.5'
textP12.style.opacity='.5'
textP13.style.opacity='.5'
textP14.style.opacity='.5'
textP15.style.opacity='.5'

// create footer
let foDiv = document.createElement('div')
let foP = document.createElement('p')
foP.textContent = 'Copyright @mahmoud_abdullah'
foDiv.appendChild(foP)
document.body.appendChild(foDiv)

// style footer
foDiv.style.backgroundColor = '#3f7d53'
foDiv.style.padding='5px'
foDiv.style.marginTop='20px'
foDiv.style.textAlign='center'
foDiv.style.fontSize='x-large'
foDiv.style.color='white'
foDiv.style.fontFamily='Arial, Helvetica, sans-serif'








