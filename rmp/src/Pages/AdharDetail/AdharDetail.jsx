import AppTitleBar from "../../Components/AppTitleBar/AppTitleBar"
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer"
import "./AdharDetail.css"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from "react";

//storage is required
import { storage, db } from "../../APIs/app"
import { doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage"
import { Alert, Button, FormControlLabel, InputAdornment, LinearProgress, Radio, RadioGroup, Snackbar, TextField, Typography } from "@mui/material"

import { readDoc } from "../../APIs/firebaseAPI's"

import AppContext from "../../Context/AppContext.js"
import { useContext } from "react";

function AdharDetail() {
    //usefull for fetching
    const { uid } = useContext(AppContext);
    
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("choose picture")
    const [localFileURL, setLocalFileURL] = useState(null);

    const [isFileUploading, setIsFileUploading] = useState(false)
    const [fileUpoadProgress, setFileUploadProgress] = useState(0)
    const [fileURL, setFileURL] = useState(null)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarSeverity, setSnackbarSeverity] = useState("success")
    const [snapbarMessage, setSnackbarMessage] = useState();

    async function getDetails() {
        try {
            // "uQKS0W1flPgylvf2snsgM1KeZEv2"
            const res = await readDoc("aadhar-kyc-uploads", uid);
            setLocalFileURL(res.url);
        } catch (err) {
            console.log("err",err);
        }
    }

    useEffect(() => {
        if(uid){
            getDetails()
        }
    }, [uid])

    async function handleFile(e) {
        setFile(e.target.files[0]);
        setLocalFileURL(URL.createObjectURL(e.target.files[0]));
        const url = await uploadFile(e.target.files[0])
        // Add a new document in collection "cities"
        await setDoc(doc(db, "aadhar-kyc-uploads", uid), {
            uid,
            url
        });
        setLocalFileURL(url)
    }

    function uploadFile(file) {
        const promise = new Promise(function (resolve, reject) {
            console.log(storage)
            setFileUploadProgress(0)
            setIsFileUploading(true)
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on("state_changed", (snapshot) => {
                const per = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(per)
                setFileUploadProgress(per)
            }, (err) => {
                console.log(err)
                setSnackbarSeverity("error")
                setSnackbarMessage("Cannot upload file")
                reject(err)
            }, async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref)
                console.log(url)
                setSnackbarSeverity("success")
                setSnackbarMessage("File uploaded successfully")
                setShowSnackbar(true)
                setFileUploadProgress(0)
                setIsFileUploading(false)
                setFileURL(url)
                resolve(url)
            })
        })
        return promise;
    }

    return (
        <div className="aadhar-details-page">
            <div className="aadhar-title-nav"><AppTitleBar title="My" hightlightTitle={"Aadhar Details"} /></div>
            <ScreenContainer overrideClassName={"aadhar-page-container"}>
                <input type="file" id="file" hidden onChange={handleFile} accept="image/*" />
                <label htmlFor="file">
                    <div className="aadhar-upload-box">
                        <CloudUploadIcon className="aadhar-upload-icon" />
                        <div className="aadhar-upload-msg">Upload Document</div>
                    </div>
                </label>

                {
                    localFileURL &&
                    <div className="doc-preview">
                        <img src={localFileURL} alt="file" />
                    </div>
                }


                {
                    isFileUploading &&
                    <LinearProgress variant="determinate" color="success" value={fileUpoadProgress} size="large" sx={{ height: 10, borderRadius: 5, margin: "10px" }} />
                }

                <Snackbar
                    open={showSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setShowSnackbar(false)}
                >
                    <Alert
                        onClose={() => setShowSnackbar(false)}
                        severity={snackbarSeverity}
                        sx={{ width: '100%' }}>
                        {snapbarMessage}
                    </Alert>
                </Snackbar>
            </ScreenContainer>
        </div>
    )
}

export default AdharDetail
