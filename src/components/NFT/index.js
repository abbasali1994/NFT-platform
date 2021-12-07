import { useState } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import Modal from "@mui/material/Modal";

import "./style.css";

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default function NFT({ nft }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: "absolute",
    top: "20%",
    left: "25%",
    width: "700px",
    height: "440px",
    outline: "none",
    background: "linear-gradient(to right, #361f38, #5e5e5e)",
    p: 4,
    borderRadius: "10px",
  };

  return (
    <>
      <Grid item xs={6} sm={4}>
        {nft ? (
          <>
            <div className="nftitem-container" onClick={handleOpen}>
              <div className="nftitem-image-container">
                <img
                  className="nftitem-image"
                  alt="nftitem-img"
                  src={nft.image}
                />
              </div>
              <div className="nftitem-title">
                <h5>#{nft.name}</h5>
              </div>
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
                <div className="nft-name-show">#{nft.name}</div>
                <div className="modal-header">
                  <div className="item-image-modal">
                    <img
                      src={nft.image}
                      alt="modal-img"
                      className="modal-image"
                    ></img>
                  </div>
                  <div className="item-description-modal">
                    <div>{nft.description}</div>
                  </div>
                </div>
                <hr />
                <h5>Attributes</h5>
                <div className="modal-inline">
                  <div className="modal-inline-child">
                    <div className="attribute-container">
                      <span className="attribute-container-header row center">
                        Race
                      </span>
                      <span className="attribute-container-tail row center">
                        {nft.attributes.Race ? nft.attributes.Race : "None"}
                      </span>
                    </div>
                    <div className="attribute-container">
                      <span className="attribute-container-header row center">
                        Skin
                      </span>
                      <span className="attribute-container-tail row center">
                        {nft.attributes.Skin ? nft.attributes.Skin : "None"}
                      </span>
                    </div>
                    <div className="attribute-container">
                      <span className="attribute-container-header row center">
                        Eyes
                      </span>
                      <span className="attribute-container-tail row center">
                        {nft.attributes.Eyes ? nft.attributes.Eyes : "None"}
                      </span>
                    </div>
                    <div className="attribute-container">
                      <span className="attribute-container-header row center">
                        Enchanted
                      </span>
                      <span className="attribute-container-tail row center">
                        {nft.attributes.EnchantedTool
                          ? nft.attributes.EnchantedTool
                          : "None"}
                      </span>
                    </div>
                  </div>
                  <div className="modal-inline-child">
                    <div className="attribute-container">
                      <span className="attribute-container-header row center">
                        Dye
                      </span>
                      <span className="attribute-container-tail row center">
                        {nft.attributes.Dye ? nft.attributes.Dye : "None"}
                      </span>
                    </div>
                    <div className="attribute-container">
                      <span className="attribute-container-header row center">
                        Background
                      </span>
                      <span className="attribute-container-tail row center">
                        {nft.attributes.Background
                          ? nft.attributes.Background
                          : "None"}
                      </span>
                    </div>
                    <div className="attribute-container">
                      <span className="attribute-container-header row center">
                        Garments
                      </span>
                      <span className="attribute-container-tail row center">
                        {nft.attributes.Garments
                          ? nft.attributes.Garments
                          : "None"}
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
