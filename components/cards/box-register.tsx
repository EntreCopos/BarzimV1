import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Social } from '../auth/social';

interface CardWrapperProps {
    headerTitle: React.ReactNode;
    headerSubtitle: React.ReactNode;
    formComponent: React.ReactNode;
    showSocial: boolean;
    footer: React.ReactNode;
}

export const BoxRegister: React.FC<CardWrapperProps> = ({
    headerTitle,
    headerSubtitle,
    formComponent,
    showSocial,
    footer,
}) => {

    return (
        <Card className="bg-[#131313] bg-opacity-85 text-[#FFFEEE] w-[95%] md:w-[30rem] h-fit rounded-lg flex flex-col py-8 backdrop-blur-lg">
            <CardHeader>
                <div>
                    <h1 className='pb-2'>{headerTitle}</h1>
                    <p>{headerSubtitle}</p>
                </div>
            </CardHeader>
            <CardContent className="w-full flex justify-center items-center">
                {formComponent}
            </CardContent>
            {showSocial && (
                <Social />
            )}
            <CardFooter>
                {footer}
            </CardFooter>

        </Card>
    )
}