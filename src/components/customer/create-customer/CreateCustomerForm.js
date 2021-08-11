import React, { useState, useEffect } from 'react'
import PageHeader from '../../layout/PageHeader';
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoToneIcon";
import { Grid } from "@material-ui/core";
import useForm from '../../form/useForm';
import Form from '../../form/Form';
import Controls from '../../controls/Controls';
import * as customerService from '../../../services/customerService';


const genderOptions = [
    { value: 'male', title: 'Male' },
    { value: 'female', title: 'Female' },
    { value: 'other', title: 'Other' }]


const initialFieldValues = {
    id: 0,
    identificationNo: '',
    identificationType: 'Kimlik',
    taxNumber: '',
    firstName: '',
    middleName: '',
    lastName: '',
    fatherName: '',
    nationality: '',
    gender: 'male',
    birthDate: new Date(),
    mobile: '',
    address: {
        name: '',
        district: '',
        cityId: '',
        countryId: '',
        street: '',
        postalCode: ''
    },
    isSysUser: false
}

const CreateCustomerForm = () => {
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues)

    return (
        <>
            <PageHeader
                title="New Customer"
                subTitle="Form design"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Form>
                <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input
                            label="Identification No"
                            name="identificationNo"
                            value={values.identificationNo}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            label="Identification Type"
                            name="identificationType"
                            value={values.identificationType}
                            onChange={handleInputChange}
                        />
                        <Controls.Select
                            label="Identification Type"
                            name="identificationType"
                            value={values.identificationType}
                            onChange={handleInputChange}
                            options={customerService.getIdentificatioTypes()}
                        />

                        <Controls.DatePicker
                            label="Birth Date"
                            name="birthDate"
                            value={values.birthDate}
                            onChange={handleInputChange}
                        />

                        <Controls.Checkbox
                            label="System User"
                            name="isSysUser"
                            value={values.isSysUser}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Controls.Input
                            label="First Name"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleInputChange}

                        />
                        <Controls.Input
                            label="Last Name"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            label="Father Name"
                            name="fatherName"
                            value={values.fatherName}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            label="Mobile"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid>
                        <Controls.Input
                            label="Tax Number"
                            name="taxNumber"
                            value={values.taxNumber}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.RadioGroup
                            name="gender"
                            label="Gender"
                            value={values.gender}
                            onChange={handleInputChange}
                            items={genderOptions}
                        />
                        <div>
                            <Controls.Button
                                type="submit"
                                text="Submit" />
                            <Controls.Button
                                text="Reset"
                                color="default"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Form>
        </>
    )
}

export default CreateCustomerForm
