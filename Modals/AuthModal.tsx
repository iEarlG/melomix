"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import Modal from "./Modal";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

    const onChange = (open: boolean) => {
        if (!open) { 
            onClose();
        }
    }

    useEffect(() => {
      if (session) {
        router.refresh();
        onClose();
      }
    }, [session, router, onClose]);
    

    return ( 
        <Modal
            title="Welcome back"
            description="Sign in to your account to continue"
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth 
                theme="dark"
                providers={["google", "facebook", "github"]}
                magicLink
                supabaseClient={supabaseClient}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent: "#21c4ba",
                            }
                        }
                    }
                }}
            />
        </Modal>
    );
}
 
export default AuthModal;