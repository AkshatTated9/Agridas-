// import React, { useState } from 'react';
// import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { toast } from 'react-toastify';
// import { useAuth } from '../../../hooks';

// const CompleteProfileDialog = ({ user }) => {
//   // const { updateUser } = useAuth();
//   const [contact, setContact] = useState(user.contact || '');
//   const [address, setAddress] = useState(user.address || '');
//   const [open, setOpen] = useState(false);

//   const handleSave = async () => {
//     if (!contact || !address) {
//       toast.error("All fields are required");
//       return;
//     }

//     const response = await updateUser({ contact, address });
//     if (response.success) {
//       toast.success("Profile updated successfully");
//       setOpen(false);
//     } else {
//       toast.error("Failed to update profile");
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button variant="outline">Complete Profile</Button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogTitle>Complete Your Profile</DialogTitle>
//         <div className="space-y-4">
//           <Input 
//             type="text" 
//             placeholder="Enter Contact Number" 
//             value={contact} 
//             onChange={(e) => setContact(e.target.value)} 
//           />
//           <Input 
//             type="text" 
//             placeholder="Enter Address" 
//             value={address} 
//             onChange={(e) => setAddress(e.target.value)} 
//           />
//           <Button onClick={handleSave} className="w-full">
//             Save
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CompleteProfileDialog;
