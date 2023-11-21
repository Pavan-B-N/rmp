import "./BankDetail.css"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NumbersIcon from '@mui/icons-material/Numbers';
import ContactsIcon from '@mui/icons-material/Contacts';
import AppTitleBar from "../../components/AppTitleBar/AppTitleBar";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";



import { readDoc } from "../../APIs/firebaseAPI's";

import AppContext from "../../Context/AppContext.js"
import { useContext } from "react";
import { useState, useEffect } from 'react';

function BankDetail() {
    //usefull for fetching
    const { uid } = useContext(AppContext);

    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');

    async function getDetails() {
        try {
            const res = await readDoc("distributed-bank-details", uid);
            console.log(res)
            setBankName(res.bank_name);
            setAccountNumber(res.acc_number);
            setAccountHolderName(res.acc_holder_name);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDetails()
    }, [])

    return (
        <div className="bank-detail-page">
            <div className="bank-detail-nav-title"><AppTitleBar title="My" hightlightTitle={"Bank Details"} /></div>
            <ScreenContainer overrideClassName={"bank-page-container"}>
                <TxtField label="Bank Name" icon={<AccountBalanceIcon />} desc={bankName} />
                <TxtField label="Account Number" icon={<NumbersIcon />} desc={accountNumber} />
                <TxtField label="Name" icon={<ContactsIcon />} desc={accountHolderName} />
                <button className="bottom-btn">Continue</button>
            </ScreenContainer>
        </div>

    )
}
function TxtField({ label, icon, desc }) {
    return (
        <fieldset className="fieldset">
            <legend>{label}</legend>
            <div className="bank-detail">
                {icon}
                <div>{desc}</div>
            </div>
        </fieldset>
    )
}

export default BankDetail
