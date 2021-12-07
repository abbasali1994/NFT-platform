import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import LoaderSpinner from "react-loader-spinner";

import { myNFTs, userAddress } from "../../redux/walletSlice";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NFT from "../../components/NFT";

import "./style.css";

export default function MyKamis() {
  const nfts = useSelector(myNFTs);
  const address = useSelector(userAddress);

  return (
    <>
      <Navbar />
      <div className="kamis-container">
        {address ? (
          <Grid container spacing={3}>
            {nfts.length > 0 ? (
              nfts.map((nft, id) => {
                return <NFT nft={nft} key={id} />;
              })
            ) : (
              <div className="load-spin-container">
                <LoaderSpinner
                  type="ThreeDots"
                  color="white"
                  height={30}
                  width={100}
                />
              </div>
            )}
          </Grid>
        ) : (
          <Grid alignItems={"center"} textAlign={"center"}>
            <Typography variant="h2" gutterBottom component="div">
              Connect Your Wallet
            </Typography>
          </Grid>
        )}
      </div>
      <Footer />
    </>
  );
}
