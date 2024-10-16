  
        // Copy Referral Link function
        function copyReferralLink() {
            const referralLink = "https://example.com/donate?ref=ABC123";
            navigator.clipboard.writeText(referralLink).then(() => {
                alert('Referral link copied to clipboard!');
            });
        }

        // Share on WhatsApp function
        function shareOnWhatsApp() {
            const whatsappURL = "https://wa.me/?text=Donate+now+with+my+referral+code+ABC123";
            window.open(whatsappURL, '_blank');
        }

