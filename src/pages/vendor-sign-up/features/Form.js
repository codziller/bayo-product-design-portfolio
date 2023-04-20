import React, { useMemo, useState } from "react";
import CircleMark from "../../../../public/circle_mark.svg";
import { Button } from "components/general/button";
import PhoneNumber from "components/general/phoneNumber/phoneNumber";
import Input from "components/general/input/Input";
import Select from "components/general/input/Select";
import { STATES } from "utils/constants";
import cleanPayload from "utils/cleanPayload";

const Form = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    business_name: "",
    business_category: "Cleaning Service",
    business_address: "",
    country: "Nigeria",
    state: "",
    phone_number: "",
    email: "",
    state: "",
  });

  const [saveSuccess, setSaveSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { ...form };
    payload = cleanPayload(payload);
    setSaveSuccess(true);
  };
  const handleChange = (prop, val) => {
    setForm({ ...form, [prop]: val });
  };
  const formDisabled = useMemo(
    () => !Object.values(form).every((x) => x),
    [form]
  );
  const successPage = () => (
    <div className="flex flex-col mt-[-50px] md:mt-2 gap-2 items-center justify-center w-full min-h-[300px] h-screen">
      <span className="pb-2">
        <CircleMark />
      </span>

      <p className="text-grey-dark font-medium text-[14px] md:text-[18px]">
        Your details has been successfully collected
      </p>
      <p className="text-grey-label font-light text-[13px] md:text-[15px] pb-5">
        Our team will reach out to you soon
      </p>
      <Button
        text="Go back to landing page"
        type="button"
        isDisabled={formDisabled}
        onClick={handleSubmit}
        fullWidth
      />
    </div>
  );
  return saveSuccess ? (
    successPage()
  ) : (
    <div className="flex flex-col justify-start items-start text-left w-full">
      <div className="w-full flex flex-col justify-start items-center mb-8 sm:mb-4 mt-20">
        <p className="text-grey-dark font-medium txt-title mb-1 ">
          Become a vendor
        </p>
        <p className="text-grey-dark font-light text-[13px] md:text-[15px]">
          Let’s help your business grow and reach more cusomers
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start items-start w-full h-full relative sm:px-5 gap-[20px] mb-24 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start w-full">
          <Input
            label="First name"
            value={form?.first_name}
            onChangeFunc={(val) => handleChange("first_name", val)}
            placeholder="Enter first name"
            required
          />

          <Input
            label="Last name"
            value={form?.last_name}
            onChangeFunc={(val) => handleChange("last_name", val)}
            placeholder="Enter last name"
            required
          />
        </div>
        <Input
          label="Business name"
          value={form?.business_name}
          onChangeFunc={(val) => handleChange("business_name", val)}
          placeholder="Enter business name"
          required
        />

        <Input
          label="Business category"
          value={form?.business_category}
          onChangeFunc={(val) => handleChange("business_category", val)}
          placeholder="Enter business category"
          required
          isDisabled
        />
        <Input
          label="Business address"
          value={form?.business_address}
          onChangeFunc={(val) => handleChange("business_address", val)}
          placeholder="Enter business address"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start w-full">
          <Input
            label="Country"
            value={form?.country}
            onChangeFunc={(val) => handleChange("country", val)}
            placeholder="Enter country"
            isDisabled
            required
          />

          <Select
            label="State"
            placeholder="Select state"
            options={STATES}
            onChange={(val) => handleChange("state", val)}
            value={form.state}
            fullWidth
          />
        </div>
        <Input
          label="Business email address"
          value={form?.email}
          onChangeFunc={(val) => handleChange("email", val)}
          placeholder="Enter business email address"
          type="email"
          required
        />

        <PhoneNumber
          label="Business phone number"
          value={form.phone_number}
          onPhoneChange={(val) => handleChange("phone_number", val)}
          placeholder="Enter business phone number"
          // labelClass="!text-black regular-font"
          required
        />

        <Button
          text="Sign up"
          type="submit"
          isDisabled={formDisabled}
          onClick={handleSubmit}
          fullWidth
        />
      </form>
    </div>
  );
};

export default Form;
