"use client"
import Image from "next/image";

export const Dashboard = () => {

    const imageUrls=[
        "https://imgnike-a.akamaihd.net/07480800.jpg",
        "https://imgnike-a.akamaihd.net/074799A1.jpg",
        "https://imgnike-a.akamaihd.net/074807ID.jpg",
        "https://imgnike-a.akamaihd.net/07480515.jpg",
        "https://imgnike-a.akamaihd.net/074794ID.jpg",
        "https://imgnike-a.akamaihd.net/074806NX.jpg",
        "https://imgnike-a.akamaihd.net/07480351.jpg",
        "https://imgnike-a.akamaihd.net/074804IE.jpg",
        "https://imgnike-a.akamaihd.net/058650ID.jpg",
        "https://imgnike-a.akamaihd.net/07479151.jpg",
        "https://imgnike-a.akamaihd.net/07480256.jpg",
        "https://imgnike-a.akamaihd.net/074801MT.jpg",
        "https://imgnike-a.akamaihd.net/0748003X.jpg",
        "https://imgnike-a.akamaihd.net/074798ID.jpg",
        "https://imgnike-a.akamaihd.net/074874ID.jpg",
        "https://imgnike-a.akamaihd.net/07480800.jpg",
        "https://imgnike-a.akamaihd.net/074799A1.jpg",
        "https://imgnike-a.akamaihd.net/074807ID.jpg",
        "https://imgnike-a.akamaihd.net/07480515.jpg",
        "https://imgnike-a.akamaihd.net/074794ID.jpg",
        "https://imgnike-a.akamaihd.net/074806NX.jpg",
        "https://imgnike-a.akamaihd.net/07480351.jpg",
        "https://imgnike-a.akamaihd.net/074804IE.jpg",
        "https://imgnike-a.akamaihd.net/058650ID.jpg",
        "https://imgnike-a.akamaihd.net/07479151.jpg",
        "https://imgnike-a.akamaihd.net/07480256.jpg",
        "https://imgnike-a.akamaihd.net/074801MT.jpg",
        "https://imgnike-a.akamaihd.net/0748003X.jpg",
        "https://imgnike-a.akamaihd.net/074798ID.jpg",
        "https://imgnike-a.akamaihd.net/074874ID.jpg",
        
    ]

  // Função para gerar as URLs de diferentes tamanhos
  const generateImageUrl = (url, size) => {
    const baseUrl = url.split("/").slice(0, -1).join("/") + "/"; // Remove o nome da imagem
    const imageName = url.split("/").pop(); // Nome da imagem
    return baseUrl + size + "/" + imageName; // Adiciona o tamanho e retorna
  };

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(160px,1fr))] flex-1">
          {imageUrls.map((url, i) => (
            <div
              key={"second-array" + i}
              className="h-[160px] w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden"
            >
              <Image
                width={160}
                height={160}
                alt={`Imagem ${i + 1}`}
                src={generateImageUrl(url, "1920x1920")}
                srcSet={`
                  ${generateImageUrl(url, "48x48")} 48w,
                  ${generateImageUrl(url, "80x80")} 80w,
                  ${generateImageUrl(url, "120x120")} 120w,
                  ${generateImageUrl(url, "250x250")} 250w,
                  ${generateImageUrl(url, "360x360")} 360w,
                  ${generateImageUrl(url, "768x768")} 768w,
                  ${generateImageUrl(url, "1024x1024")} 1024w,
                  ${generateImageUrl(url, "1366x1366")} 1366w,
                  ${generateImageUrl(url, "1920x1920")} 1920w
                `}
                sizes="(min-width: 1201px) 15vw, (min-width: 1025px) 10vw, 40vw"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                style={{ color: "transparent" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};