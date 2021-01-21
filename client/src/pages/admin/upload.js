import React , {useState} from 'react';
import {TextField,Button,Typography} from '@material-ui/core';
import './uploadStyles.css';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createItem} from '../../redux/item/item.actions';
const Upload =()=>{
    
    const [postItem,setPostItem]=useState({category:'',mrp:'',price:'',name:'',selectedFile:''})
    const dispatch =useDispatch();
    const handleSubmit =(e) =>{
        e.preventDefault();
        dispatch(createItem(postItem));

    }
    
    return (
        
            <form className='form_upload' onSubmit={handleSubmit}>
                <Typography variant="h6" style={{  textAlign:'center' }}>Upload Items</Typography>
                <TextField name="category" variant="outlined" label="category" fullWidth value={postItem.category} onChange={(e) => setPostItem({...postItem,category:e.target.value})} />
                <TextField name="mrp" variant="outlined" label="mrp" fullWidth value={postItem.mrp} onChange={(e) => setPostItem({...postItem,mrp:e.target.value})} />
                <TextField name="price" variant="outlined" label="price" fullWidth value={postItem.price} onChange={(e) => setPostItem({...postItem,price:e.target.value})} />
                <TextField name="name" variant="outlined" label="name" fullWidth value={postItem.name} onChange={(e) => setPostItem({...postItem,name:e.target.value})} />
                
                <div >
                    <br/>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostItem({...postItem,selectedFile:base64})}
                    />
                </div>
                
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth  >Submit</Button>
                <br/>
                <Button variant="contained" color="secondary" size="small" fullWidth >Clear</Button>
            </form>
        
    );
}

export default Upload;