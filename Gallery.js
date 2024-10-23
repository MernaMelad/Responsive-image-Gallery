import React, {useState} from 'react';
import './gallery.css';
Import CloseIcon from '@material-ui/icons/Close';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
const Gallery = () =>{

    let data =[
        {
            id:1,
            imgScr:'img1',

        },
        {
            id:2,
            imgScr:'img2',

        },
        {
            id:3,
            imgScr:'img3',

        },
        {
            id:4,
            imgScr:'img4',

        },
        {
            id:5,
            imgScr:'img5',

        },
        {
            id:6,
            imgScr:'img6',

        },

]
const[model,setModel] = useState(false);
const [tempimgSrc,setTempImgSrc] = useState('');
const getImg = (imgScr) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
    
}
    return(
        <>
        <div className= {model? "model open" : "model"} >
        <img src={tempimgSrc} />
        <CloseIcon onClick ={()=> setModel(false)}/>
        </div>
       <div className="gallery">
           {data.nap((item, index)=>{
               return(
                <div className="pics" key={index} onClick={()=> getImg(item,imgSrc)}>
                    <img src={item,imgSrc} style={{width: '100%s'}} />

                    </div>

               )
           })}

       </div>
       
        </>
    )



}
export default Gallery;