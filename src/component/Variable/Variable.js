import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    AvatarIcon,
    CoinIcon,
    DarkmodeIcon,
    FacebookIcon,
    FeedbackIcon,
    GoogleIcon,
    InstagramIcon,
    KakaotalkIcon,
    KeyboardIcon,
    LanguageIcon,
    LineIcon,
    LogoutIcon,
    ProfileIcon,
    QrcodeIcon,
    SettingIcon,
    TwitterIcon,
} from '~/component/Icons';

export const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    title: 'English',
                },
                {
                    title: 'العربية',
                },
                {
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    title: 'Čeština (Česká republika)',
                },
                {
                    title: 'Deutsch',
                },
                {
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    title: 'Español',
                },
                {
                    title: 'Suomi (Suomi)',
                },
                {
                    title: 'Filipino (Pilipinas)',
                },
                {
                    title: 'Français',
                },
                {
                    title: 'हिंदी',
                },
                {
                    title: 'Magyar (Magyarország)',
                },

                {
                    title: 'Italiano (Italia)',
                },
                {
                    title: '日本語（日本）',
                },
                {
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
                {
                    title: '한국어 (대한민국)',
                },
                {
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    title: 'မြန်မာ (မြန်မာ)',
                },
                {
                    title: 'Nederlands (Nederland)',
                },
                {
                    title: 'Polski (Polska)',
                },
                {
                    title: 'Português (Brasil)',
                },
                {
                    title: 'Română (Romania)',
                },
                {
                    title: 'Русский (Россия)',
                },
                {
                    title: 'Svenska (Sverige)',
                },
                {
                    title: 'ไทย (ไทย)',
                },
                {
                    title: 'Türkçe (Türkiye)',
                },
                {
                    title: 'Українська (Україна)',
                },
                {
                    title: 'اردو',
                },
                {
                    title: '简体中文',
                },
                {
                    title: '繁體中文',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <DarkmodeIcon />,
        title: 'Dark mode',
    },
];

export const MENU_PROFILES = [
    {
        icon: <ProfileIcon />,
        title: 'View profiles',
        to: '/users',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

export const FORM_MODAL = [
    {
        icon: <QrcodeIcon />,
        title: 'User QR code',
        to: '',
        children: {
            data: [
                {
                    title1: 'Log in with QR code',
                    qrcode: '',
                    text1: '1. Scan with your mobile device’s camera',
                    text2: '2. Confirm login or sign up',
                },
            ],
        },
    },
    {
        icon: <AvatarIcon />,
        title: 'Use phone / email / username',
        to: '',
    },
    {
        icon: <FacebookIcon />,
        title: 'Continue with Facebook',
        to: '',
    },
    {
        icon: <GoogleIcon />,
        title: 'Continue with Google',
        to: '',
    },
    {
        icon: <TwitterIcon />,
        title: 'Continue with Twitter',
        to: '',
    },
    {
        icon: <LineIcon />,
        title: 'Continue with Line',
        to: '',
    },
    {
        icon: <KakaotalkIcon />,
        title: 'Continue with Kakaotalk',
        to: '',
    },
    {
        icon: <FontAwesomeIcon icon={faApple} />,
        title: 'Continue with Apple',
        to: '',
    },
    {
        icon: <InstagramIcon />,
        title: 'Continue with Instagram',
        to: '',
    },
];
