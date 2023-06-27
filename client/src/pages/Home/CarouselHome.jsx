import { Carousel } from 'antd';

const CarouselHome = () => (
  <Carousel autoplay autoplaySpeed={4000}>
    <div>
        <div className='flex h-[500px] bg-gray-100 items-center mobile:w-full tablet:w-full'>
            <div className=' ml-10 w-[50%]  mobile:pl-0 tablet:pl-1'>
                <h1 className=' desktop: text-8xl pt-6 mobile:text-2xl tablet:text-6xl' >SPICY SANDWICH. HOT REWARDS.</h1>
                <p className='mt-6'>Order any KFC Chicken Sandwich online until July 2nd and get exclusive Diablo IV in-game rewards. Go to KFC.com/diablo for terms.</p>
            </div>
            <div className='h-[500px] w-[50%]'>
                <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-new8pcTenders-OnlineDeal?q=75&w=1280"  className='h-full' alt="" srcset="" /></div>
        </div>
    </div>

    <div>
    <div className='flex h-[500px] bg-gray-100 items-center mobile:w-full tablet:w-full'>
        <div className='ml-10 w-[50%] mobile:pl-0 tablet:pl-1'>
            <h1 className='text-8xl pt-6 mobile:text-2xl tablet:text-6xl' >FREE BEVERAGE BUCKET - 12 PC. TENDERS MEAL</h1>
            <p className='mt-6'>Perfect for dipping, our 12 Piece Extra Crispy™ Chicken Tenders Meal comes complete with 3 large sides of your choice</p>
        </div>
        <div className='h-[500px] w-[50%] '>
            <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-new12pcTendersMealExistingBEV?q=75&w=1280"  className='h-full' alt="" srcset="" /></div>
    </div>
    </div>


     <div>
     <div className='flex h-[500px] bg-gray-100 items-center mobile:w-full tablet:w-full'>
        <div className='ml-10 w-[50%] mobile:pl-0 tablet:pl-1'>
            <h1 className='text-8xl pt-6 mobile:text-2xl tablet:text-6xl' >CHICKEN + NUGGETS FAMILY MEAL</h1>
            <p className='mt-6'>Order any KFC Chicken Sandwich online until July 2nd and get exclusive Diablo IV in-game rewards. Go to KFC.com/diablo for terms.</p>
        </div>
        <div className='h-[500px] w-[50%] '>
            <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-6pcCOB12pcNuggets?q=75&w=1280"  className='h-full' alt="" srcset="" /></div>
    </div>
    </div>


    <div>
    <div className='flex h-[500px] bg-gray-100 items-center mobile:w-full tablet:w-full'>
        <div className='ml-10 w-[50%] mobile:pl-0 tablet:pl-1'>
            <h1 className='text-8xl pt-6 mobile:text-2xl tablet:text-6xl' >CHICKEN LITTLE COMBO</h1>
            <p className='mt-6'>2 Chicken Littles, a side of your choice, and a medium drink.</p>
        </div>
        <div className='h-[500px] w-[50%] '>
            <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-ChLtlCombo?q=75&w=1280"  className='h-full' alt="" srcset="" /></div>
    </div>
    </div> 
  </Carousel>
);
export default CarouselHome;