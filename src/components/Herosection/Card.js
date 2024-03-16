import Image from 'next/image';

function Card({ title, imgSrc }) {
    return (
        <div>
        <div className="p-4 m-2 bg-white rounded-xl shadow-lg max-w-xs">
            <Image src={imgSrc} alt={title} width={200} height={200} className="rounded-xl" />
           
        </div>
        <div> <h2 className="mt-2 text-xl font-bold justify-center">{title}</h2></div>
        </div>
    );
}

export default Card;
