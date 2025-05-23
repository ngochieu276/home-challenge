import React from "react";
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { toast } from "react-toastify";

interface ConfirmModalProps {
  title: string;
  description: string;
  trigger: React.ReactNode;
  onConfirm: () => boolean | Promise<boolean>;
  confirmSuccessMsg?: string;
}

const ConfirmModal = ({
  title,
  description,
  trigger,
  confirmSuccessMsg,
  onConfirm,
}: ConfirmModalProps) => {
  const [open, setOpen] = React.useState(false);

  const handleConfirm = async () => {
    if (!onConfirm) return;
    const result = await onConfirm();
    if (result) {
      setOpen(false);
      toast.success(confirmSuccessMsg);
    }
    // else do nothing
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
          <Button className="bg-green-600" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal;
