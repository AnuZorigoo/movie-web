import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <div className="w-full bg-[#4338CA] text-white py-8">
            <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start px-4 md:items-center gap-8 md:gap-0">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <img src="/Vector (3).png" className="w-5 h-5" alt="Logo" />
                        <p className="text-[16px]">Movie Z</p>
                    </div>
                    <p className="text-[14px] font-light">© 2024 Movie Z. All Rights Reserved.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-24 text-[14px]">
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold">Contact Information</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <Mail className="mt-1" />
                                <div className="flex flex-col">
                                    <p className="font-semibold">Email:</p>
                                    <p>support@movieZ.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="mt-1" />
                                <div className="flex flex-col">
                                    <p className="font-semibold">Phone:</p>
                                    <p>+976 (11) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold">Follow us</p>
                        <div className="flex gap-3 flex-wrap">
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                            <p>Youtube</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
