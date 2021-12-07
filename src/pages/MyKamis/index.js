import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import LoaderSpinner from "react-loader-spinner";

import { userAddress } from "../../redux/walletSlice";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NFT from "../../components/NFT";
import { fetchUserData } from "../../utils/wallet";
import { getEthersProvider } from "../../utils/wallet";

import "./style.css";

export default function MyKamis() {
    const provider = getEthersProvider();
    const [nftIDs, setNftIDs] = useState([]);
    const address = useSelector(userAddress);

    useEffect(() => {
        if (provider) {
            fetchUserData().then((res) => {
                setNftIDs(res);
            })   
        }
    }, [provider]);
    
    return (    
        <>
            <Navbar />
            <div  className="kamis-container">
                {address ? (
                    <Grid container spacing={3}>
                    {
                    nftIDs.length > 0 ? (
                        <>
                            {
                                nftIDs.map((IDs ,id) => {
                                    return (
                                        <NFT metaUrl = {IDs} key={id} />
                                    )
                                })
                            }
                        </>
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
                    <Grid alignItems={'center'} textAlign={'center'}>
                        <Typography variant="h2" gutterBottom component="div">
                            Connect Your Wallet
                        </Typography>
                    </Grid>
                )}
                
            </div>
        <Footer/>
        </>
  );
}
