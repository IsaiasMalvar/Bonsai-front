import { Modal } from "../../store/types";

export const createdModal: Modal = {
  isOn: false,
  isError: false,
  image: "/images/created.svg",
  message: "Micro added successfully!",
};

export const deletedModal: Modal = {
  isOn: false,
  isError: false,
  image: "/images/deleted.svg",
  message: "Micro deleted successfully!",
};

export const modifiedModal: Modal = {
  isOn: false,
  isError: false,
  image: "/images/modified.svg",
  message: "Micro modified successfully!",
};

export const notCreatedModal: Modal = {
  isOn: false,
  isError: true,
  image: "/images/not-created.svg",
  message: "Dang it! The micro could not be added to your collection.",
};

export const notModifiedModal: Modal = {
  isOn: false,
  isError: true,
  image: "/images/not-modified.svg",
  message: "Dang it! The micro could not be modified.",
};

export const notDeletedModal: Modal = {
  isOn: false,
  isError: true,
  image: "/images/not-deleted.svg",
  message: "Dang it! The micro could not be deleted.",
};

export const wrongCredentialsModal: Pick<
  Modal,
  "message" | "isError" | "isOn"
> = {
  isOn: false,
  isError: true,
  message: "Oops, wrong credentials! Please, try again.",
};

export const loadingErrorModal: Pick<Modal, "message" | "isError" | "isOn"> = {
  isOn: false,
  isError: true,
  message: "Oh no! Micros could not be loaded",
};
