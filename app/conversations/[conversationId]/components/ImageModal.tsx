"use client";

import Modal from "@/app/components/modals/Modal";
import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isImageModal={true}>
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-h-[50vh] overflow-auto">
          <img
            className="w-full"
            alt="Image"
            src={src}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
