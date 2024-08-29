import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ReturnToCourseSelectionButton = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <Button onClick={handleReturn} className='flex items-center space-x-2'>
      <ArrowLeft size={16} />
      <span>Return to Course Selection</span>
    </Button>
  );
};

export default ReturnToCourseSelectionButton;
