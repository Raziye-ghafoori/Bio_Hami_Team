
import { useRef, useState} from "react";
import { Card, 
  CardHeader, 
  CardBody, 
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  Image,
  Tooltip,
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,

 } from '@chakra-ui/react'
import './App.css'
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { TbZoomQuestion } from "react-icons/tb";
import { GiRotaryPhone } from "react-icons/gi";
import { FaPhoneVolume, FaPaintRoller } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";

const handlerButtonResponsivenessPhone = ()=>{
  console.log('پاسخگویی');
}
const handlerButtonMadadyPhone = ()=>{
  console.log('مددی');
}
const handlerButtonArabiPhone = ()=>{
  console.log('عربی');
}
const handlerButtonManagement = ()=>{
  console.log('ارتباط با مدیریت');
}
const handlerButtonMainLineCompany = ()=>{
  console.log('خط اصلی شرکت');

}
const handlerButtonTelegram = ()=>{
  console.log('تلگرام');

}
const handlerButtonEitaa = ()=>{
  console.log('ایتا');

}



function App() {
  const [theme,SetTheme] = useState('bg_defualt');
  const [themeItems,SetThemeItems] = useState('bg_items_defualt');
  const [themeDl,SetThemeDL] = useState('light_bg');


  const { isOpen:isOpenPhone, onOpen:onOpenPhone, onClose:onClosePhone } = useDisclosure();
  const cancelRefPhone = useRef(null);
  const { isOpen:isOpenQuestion, onOpen:onOpenQuestion, onClose:onCloseQuestion } = useDisclosure();
  const cancelRefQuestion = useRef(null);
  const { isOpen:isOpenTheme, onOpen:onOpenTheme, onClose:onCloseTheme } = useDisclosure();
  const cancelRefTheme = useRef(null);
  
const handlerChangeTheme = (newTheme: string) => {
    SetTheme(newTheme);
    handlerChangeThemeItems(newTheme); // Pass the new theme directly
}

  const handlerChangeThemeItems = (newTheme: string) => {
    switch (newTheme) {
      case 'bg_blue':
        SetThemeItems('bg_items_blue');
        break;
      
      case 'bg_pink':
        SetThemeItems('bg_items_pink');
        break;
      
      case 'bg_orange':
        SetThemeItems('bg_items_orange');
        break;
    
      default:
        SetThemeItems('bg_items_defualt');
        break;
    }
  }

  const handlerChangeThemeDL = (newThemeDL: string) => {
    SetThemeDL(newThemeDL);
}

  return (
    <>
    <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'100%'} p={0} m={0} className={theme}>
    <IconButton onClick={onOpenTheme} p={'10px'} m={'20px'} w={'50px'} h={'50px'} aria-label='change-theme' icon={<FaPaintRoller/>} background={'none'} _hover={{background:'#f8f9fd40'}}  />
    <Card  w={'500px'} border={'none'} className={`${themeDl} animation-opa`} m={'60px auto'} alignItems={'center'} p={'50px 0'}>
  <CardHeader >
    <Flex >
      <Flex flex='1' gap='4' alignItems='center' flexDirection={'column'} >
        <Avatar _hover={{boxShadow:'#06024f 1px 1px 10px'}} name='حامی تیم' size='2xl' boxShadow={'white 1px 1px 10px'} src='../public/images/Logo-haami.jpg' />
        <Box>
          <Heading className="font-text" fontSize={'20px'} color={'#f8f9fd'} textShadow={'.1px .1px 10px #06024f'}>حامی، گروه تخصصی رزرو هتل</Heading>
        </Box>
        <Box p={'8px'} className={themeItems} borderRadius={'50px'}>
          <Text className="font-text " fontSize={'17px'}>برای اقامتی خوب، حامی-تیم</Text>
        </Box>
      </Flex>
      
    </Flex>
  </CardHeader>
  <CardBody w={'90%'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'}  alignItems={'center'} >
    <Tooltip label='تماس با ما' borderRadius={'10px'} color={'black'}>
    <IconButton onClick={onOpenPhone} w={'50px'} h={'50px'} aria-label='phone_numbers' icon={<AiOutlinePhone/>} className={themeItems} _hover={{color:'#06024f',background:'#f8f9fd40 !important'}}  />
    </Tooltip>
    <Tooltip label='خط اصلی شرکت' borderRadius={'10px'} color={'black'}>
    <IconButton onClick={handlerButtonMainLineCompany} w={'50px'} h={'50px'} aria-label='compony-phone' icon={<GiRotaryPhone/>} className={themeItems} _hover={{color:'#06024f',background:'#f8f9fd40 !important'}} />
    </Tooltip>
    <Tooltip label='تلگرام' borderRadius={'10px'} color={'black'}>
    <IconButton onClick={handlerButtonTelegram} w={'50px'} h={'50px'} aria-label='telegram' icon={<FaTelegramPlane/>} className={themeItems} _hover={{color:'#06024f',background:'#f8f9fd40 !important'}} />
    </Tooltip>
    <Tooltip label='ایتا' borderRadius={'10px'} color={'black'}>
    <Button onClick={handlerButtonEitaa} w={'50px'} h={'50px'} className={themeItems} _hover={{color:'#06024f',background:'#f8f9fd40 !important'}}><Image h={'14px'}  src='../public/images/eitaa.png'/></Button>
    </Tooltip>
    <Tooltip  label='سوالات متداول' borderRadius={'10px'} color={'black'}>
    <IconButton onClick={onOpenQuestion} w={'50px'} h={'50px'} aria-label='questions' icon={<TbZoomQuestion/>} className={themeItems} _hover={{color:'#06024f',background:'#f8f9fd40 !important'}} />
    </Tooltip>
  </CardBody> 
</Card>
      <AlertDialog
        isOpen={isOpenPhone}
        leastDestructiveRef={cancelRefPhone}
        onClose={onClosePhone}
      >
        <AlertDialogOverlay >
          <AlertDialogContent className={`${theme} ${themeItems}`}>
            <AlertDialogHeader className="font-text" fontSize='lg' fontWeight='bold'>
              شماره های ما (تماس، ایتا، تلگرام)
            </AlertDialogHeader>

            <AlertDialogBody w={'100%'}>
              <Button onClick={handlerButtonResponsivenessPhone} w={'100%'} p={'5px'} background={'none'} className={themeItems} m={'0'} display={'flex'}  justifyContent={'space-between'}><Box display={'flex'}  alignItems={'center'}><FaPhoneVolume/><Text className="font-text" marginRight={'10px'}>پاسخگویی از 9 صبح تا 9 شب</Text></Box><Text className="font-text" >051-91690169</Text></Button>
              <Button onClick={handlerButtonMadadyPhone} w={'100%'} p={'5px'} background={'none'} m={'0'} className={themeItems} display={'flex'}  justifyContent={'space-between'}><Box display={'flex'}  alignItems={'center'}><IoPhonePortraitOutline/><Text className="font-text"  marginRight={'10px'}>آقای مددی</Text></Box><Text className="font-text">09353160169</Text></Button>
              <Button onClick={handlerButtonArabiPhone} w={'100%'} p={'5px'} background={'none'} m={'0'}  className={themeItems}display={'flex'}  justifyContent={'space-between'}><Box display={'flex'}  alignItems={'center'}><IoPhonePortraitOutline/><Text className="font-text" marginRight={'10px'}>خانم عربی</Text></Box><Text className="font-text">09351630169</Text></Button>
              <Button onClick={handlerButtonManagement} w={'100%'} p={'5px'} background={'none'} m={'0'}  className={themeItems} display={'flex'}  justifyContent={'space-between'}><Box display={'flex'}  alignItems={'center'}><LuMessageSquareMore/><Text className="font-text" marginRight={'10px'}>ارتباط با مدیریت</Text></Box><Text className="font-text">09150100898</Text></Button>
                            
            </AlertDialogBody>

          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      
      <AlertDialog
        isOpen={isOpenQuestion}
        leastDestructiveRef={cancelRefQuestion}
        onClose={onCloseQuestion}
      >
        <AlertDialogOverlay >
          <AlertDialogContent alignItems={'flex-end'} className={`${theme} ${themeItems}`} >

            <AlertDialogBody w={'100%'}>
             <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={themeDl=='light_bg'?{ bg: '#f8f9fd40'}:{bg:'#00000040'}}>
                    <Box className="font-text" as='span' flex='1' textAlign='right'>
                      یک توضیح کلی راجع به خودتون میدین؟
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel className="font-text" pb={4} textAlign={'right'}>
                سلام🌹
                <br/>
                ما تیم مشاوره و رزرو هتل در مشهد هستیم،<br/>
                که با ده ها هتل قرارداد داریم.<br/>
                این هتل ها رو به صورت دوره ای از نزدیک بررسی میکنیم و اگر به نسبت قیمت و لوکیشنی که دارن مورد تایید ما باشن، با قیمتی پایین تر از نرخ آزاد، برای شما رزرو میکنیم و پشتیبان سفرتون هستیم.
                </AccordionPanel>
              </AccordionItem>
              
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={themeDl=='light_bg'?{ bg: '#f8f9fd40'}:{bg:'#00000040'}}>
                    <Box className="font-text" as='span' flex='1' textAlign='right'>
                    چرا باید از شما رزرو کنیم؟
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel className="font-text" pb={4} textAlign={'right'}>
                شما علاوه بر ابنکه با رزرو هتل از طریق ما سود میکنید،<br/>
                پشتیبانی رایگان ما رو دارید،<br/>
                کد تخفیف به صورت بلندمدت شامل حالتون میشه،<br/>
                و شانس برنده شدنِ پنج میلیون وجه نقد رو در یکی از فصل های زیبای سال دارید😍
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={themeDl=='light_bg'?{ bg: '#f8f9fd40'}:{bg:'#00000040'}}>
                    <Box className="font-text" as='span' flex='1' textAlign='right'>
                    هتل های شما در چه رنج قیمتی هستند؟
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel className="font-text" pb={4} textAlign={'right'}>
                ما هتل از نفری ۲۰۰ هزار تومان ( بدون غذا) داریم،<br/>
                تا نفری ۲ میلیون تومان!<br/>
                از هتل آپارتمان تا هتل چهار ستاره..<br/>
                کافیه تماس بگیری تا نسبت به خواسته و بودجه ات راهنماییت کنیم.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={themeDl=='light_bg'?{ bg: '#f8f9fd40'}:{bg:'#00000040'}}>
                    <Box className="font-text" as='span' flex='1' textAlign='right'>
                    پشتیبانی شامل چه مواردی میشه؟
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel className="font-text" pb={4} textAlign={'right'}>
                •در صورت بروز هرگونه مشکل در هتل و عدم پیگیری توسط هتلدار، موارد از طریق ما پیگیری میشه.<br/>
                • در صورت عدم رضایت از هتل (با دلایل موجه) ، پشتیبانی ما بابت جا به جایی محل اقامت را به بهترین شکل ممکن دارید.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={themeDl=='light_bg'?{ bg: '#f8f9fd40'}:{bg:'#00000040'}}>
                    <Box className="font-text" as='span' flex='1' textAlign='right'>
                    قیمت ها برای یک نفر هم همینه؟
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={'right'}>
                •خیر<br/>
                تمام هتل های ما از دوتخته به بالا هستند.<br/>
                و اگر یک نفر هستید، هزینه ی دو تخت برای شما محاسبه می شود.
                </AccordionPanel>
              </AccordionItem>

            </Accordion>                           
            </AlertDialogBody>

          </AlertDialogContent>
        </AlertDialogOverlay>

      </AlertDialog>

      <AlertDialog
        isOpen={isOpenTheme}
        leastDestructiveRef={cancelRefTheme}
        onClose={onCloseTheme}
      >
        <AlertDialogOverlay >
          <AlertDialogContent className={`${theme} ${themeItems}`}>
            <AlertDialogHeader className="font-text" fontSize='lg' fontWeight='bold'>
             شخصی سازی تم سایت
            </AlertDialogHeader>

            <AlertDialogBody w={'100%'}>
              <Text className="font-text" fontSize={'20px'}>تم ها</Text>
              <Box display={'flex'} justifyContent={'space-evenly'} m={'20px'}>
              <Button onClick={()=>{handlerChangeTheme('bg_defualt')}}  borderRadius={'100%'} backgroundImage={'linear-gradient(90deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'} _hover={{border:'2px red solid'}} _active={{}} ></Button>
              <Button onClick={()=>{handlerChangeTheme('bg_pink')}} borderRadius={'100%'} backgroundImage={'linear-gradient(90deg, #ad5389, #3c1053 100%)'} _hover={{border:'2px red solid'}} _active={{}}></Button>
              <Button onClick={()=>{handlerChangeTheme('bg_blue')}} borderRadius={'100%'} backgroundImage={'linear-gradient(90deg, #e8cbc0 0%, #636fa4 100%)'} _hover={{border:'2px red solid'}} _active={{}}></Button>
              <Button onClick={()=>{handlerChangeTheme('bg_orange')}} borderRadius={'100%'} backgroundImage={'linear-gradient(90deg, #556270 0%, #ff6b6b 100%)'} _hover={{border:'2px red solid'}} _active={{}}></Button>
              </Box>
              <Box display={'flex'} justifyContent={'space-evenly'} m={'20px'}>
                <Text>تیره یا روشن</Text>
                <Button onClick={()=> handlerChangeThemeDL('light_bg')} borderRadius={'100%'} background={'white'} _hover={{border:'2px red solid'}} _active={{}}></Button>
                <Button onClick={()=> handlerChangeThemeDL('dark_bg')} borderRadius={'100%'} background={'black'} _hover={{border:'2px red solid'}} _active={{}}></Button>
              </Box>
            </AlertDialogBody>

          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

    </Box>

    </>
  )
}

export default App
