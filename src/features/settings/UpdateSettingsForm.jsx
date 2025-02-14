import Spinner from "../../ui/Spinner";
import { useSettings } from "../settings/useSettings";
import { useUpdateSetting } from "./useUpdateSettings";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UpdateSettingsForm() {
  // const {
  //   settings: {
  //     minBookingLength,
  //     maxBookingLength,
  //     maxGuestsPerBooking,
  //     breakfastPrice,
  //   } = {},
  //   isLoading,
  // } = useSettings();
  const {
    isLoading,
    settings: {
      minbookinglength,
      maxBookingLength,
      breakfastPrice,
      maxNumberOfGuestPerBooking,
    } = {},
  } = useSettings();

  // const { mutate: updateSetting, isLoading: isUpdating } = useUpdateSetting();
  const { updateSetting, isUpdating } = useUpdateSetting();

  // return <Spinner />;
  if (isLoading) return <Spinner />;

  function handleBlur(e, field) {
    const { value } = e.target;

  if (!value) return;
  updateSetting({ [field]: value });
  }

  // This time we are using UNCONTROLLED fields, so we will NOT store state
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          defaultValue={minbookinglength}
          onBlur={(e) => handleBlur(e, "minbookinglength")}
          disabled={isUpdating}
          id="min-nights"
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleBlur(e, "maxBookingLength")}
          disabled={isUpdating}
          id="max-nights"
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          defaultValue={maxNumberOfGuestPerBooking}
          onBlur={(e) => handleBlur(e, "maxNumberOfGuestPerBooking")}
          disabled={isUpdating}
          id="max-guests"
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleBlur(e, "breakfastPrice")}
          disabled={isUpdating}
          id="breakfast-price"
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
