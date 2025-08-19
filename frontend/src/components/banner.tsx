"use client"

export const Banner = () => {
    return(
        <div className="flex gap-10 w-[80%] h-[360px]">
          <div className="flex flex-col justify-center">

          <h1 className="text-3xl mb-12">Descubra a maneira mais ágil e segura de adquirir suas assinaturas e chaves premium.</h1>
          <p className="text-[20px]">Na GGames Store, você encontra as melhores keys da Steam, códigos e assinaturas de streaming. Experimente a segurança e a rapidez que só nós oferecemos!</p>
          </div>
          <img className="w-[350px] h-full object-cover rounded-2xl" src="https://i.pinimg.com/736x/7d/05/90/7d0590d4ae446d3d5e38cf0200192f4b.jpg" alt="" />
        </div>
    )
}