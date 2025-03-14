import ReactModal from "react-modal";

interface DeleteFeedbackModalProps {
  isOpen: boolean;
  onRequestClose?: () => void;
  onConfirmDelete?: () => void;
}

export default function DeleteFeedbackModal({
  onConfirmDelete,
  ...props
}: DeleteFeedbackModalProps) {
  return (
    <ReactModal
      ariaHideApp={false}
      className="content absolute top-1/2 left-1/2 -translate-1/2 w-full max-w-sm rounded-[10] p-6 sm:p-8 bg-white [&_p]:text-lynch [&_p]:mt-4 text-[13px] sm:text-[15px]"
      overlayClassName="fixed inset-0 bg-black/50"
      {...props}
    >
      <h2 className="font-bold text-lg/[normal]">Delete feedback</h2>
      <p>
        Are you sure you want to delete this feedback?{" "}
        <span className="text-error">This action cannot be undone.</span>
      </p>

      <div className="flex justify-end gap-3 mt-8">
        <button
          onClick={props.onRequestClose}
          className="cursor-pointer flex shrink-0 items-center justify-center bg-zircon hover:bg-periwinkle px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onConfirmDelete}
          className="cursor-pointer flex shrink-0 items-center justify-center bg-error hover:bg-[#e98888] text-zircon px-4 sm:px-6 min-h-10 sm:min-h-11 rounded-[10] font-bold text-[13px] sm:text-sm/[normal] transition-colors"
        >
          Delete
        </button>
      </div>
    </ReactModal>
  );
}
