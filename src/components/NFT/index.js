import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import axios from 'axios';

import "./style.css";

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default function NFT(props) {
  const { metaUrl } = props;
  const [item, setItem] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '20%',
    left: '25%',
    width: '50%',
    height: '60%',
    outline: 'none',
    background: "linear-gradient(to right, #361f38, #5e5e5e)",
  
    p: 4,
    borderRadius: "10px",
  };

  const fetchNFT = async (url) => {
    const fetch_value = await axios.get(url);
    return fetch_value;
  }

  useEffect(() => {
    if (metaUrl) {
      fetchNFT(metaUrl)
        .then((fetch_value) => {
          setItem(fetch_value.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [metaUrl])

  return (
    <>
      <Grid item xs={6} sm={4}>
        {item ? (
          <>
            <div className="nftitem-container" onClick={handleOpen}>
              <div className="nftitem-image-container">
                <img className="nftitem-image" alt="ntfitem-img" src={item.image} />
              </div>
              <div className="nftitem-title"><h5>#{item.name}</h5></div>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={modalStyle}
              BackdropComponent={Backdrop}
            >
              <div className="modal-div">
              <div className="nft-name-show">#{item.name}</div>

              {/* &#9876 */}
                <div className="modal-header">
                  <div className="item-image-modal">
                    <img src={item.image} alt="modal-img" className="modal-image"></img>              
                  </div>
                  <div className="item-description-modal">
                    <div>{item.description}</div>
                  </div>
                </div>
                <hr />
                <h5>Attributes</h5>
                <div className="modal-inline">
                    <div className="modal-inline-child">
                      <div className="attribute-container">
                        <span className="attribute-container-header row center" >
                          Race
                        </span>
                        <span className="attribute-container-tail row center">
                          {item.attributes.Race}
                        </span>
                      </div>
                      <div className="attribute-container">
                        <span className="attribute-container-header row center">
                          Skin
                        </span>
                        <span className="attribute-container-tail row center">
                          {item.attributes.Skin}
                        </span>
                      </div>
                      <div className="attribute-container">
                        <span className="attribute-container-header row center">
                          Eyes
                        </span>
                        <span className="attribute-container-tail row center">
                          {item.attributes.Eyes}
                        </span>
                      </div>
                      <div className="attribute-container">
                        <span className="attribute-container-header row center">
                          Enchanted
                        </span>
                        <span className="attribute-container-tail row center">
                          {item.attributes.EnchantedTool}
                          . . .
                        </span>
                      </div>
                    </div>

                    
                    <div className="modal-inline-child">
                      <div className="attribute-container">
                        <span className="attribute-container-header row center">
                          Dye 
                        </span>
                        <span className="attribute-container-tail row center">
                          {item.attributes.Dye}
                        </span>
                      </div>
                      <div className="attribute-container">
                        <span className="attribute-container-header row center">
                          Background
                        </span>
                        <span className="attribute-container-tail row center">
                          {item.attributes.Background}
                        </span>
                      </div>
                      <div className="attribute-container">
                        <span className="attribute-container-header row center">
                          Garments
                        </span>
                        <span className="attribute-container-tail row center">
                          {item.attributes.Garments}
                        </span>
                      </div>
                    </div>
                </div>

              </div>
            </Modal>
          </>
        ) : (
          <div></div>
        )}
      </Grid>
    </>
  );
}
