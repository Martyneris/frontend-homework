import React, { FC, useState } from 'react';
import { PackageSelection } from '../PackageSelection/PackageSelection';
import { PackageID } from '@/src/types/Packages';
import { UserInfoForm } from '../UserInfoForm/UserInfoForm';
import { Checkout } from '../Checkout/Checkout';
import { PurchaseComplete } from '../PurchaseComplete/PurchaseComplete';
import { UserInfoFormValues } from '@/src/types/Forms';

export const PurchaseForm: FC = () => {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<PackageID>('single');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);

  const handleSubmitFormData = (data: UserInfoFormValues) => {
    setFormData(data);
    nextStep();
  };

  switch (step) {
    case 1:
      return (
        <PackageSelection
          onPackageSelect={(value: PackageID) => setSelectedPackage(value)}
          onSubmit={nextStep}
          selectedPackage={selectedPackage}
        />
      );
    case 2:
      return <UserInfoForm onSubmit={handleSubmitFormData} />;
    case 3:
      return (
        <Checkout userData={{ packageId: selectedPackage, ...formData }} onSuccess={nextStep} />
      );
    case 4:
      return <PurchaseComplete />;
    default:
      return <></>;
  }
};
