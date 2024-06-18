import Image from "next/image";

const sampleGenerations = [
  // {
  //     "src": "/STAR/samples/bd55048a15200809a1aed131c912e8babba2f82c97cf24f9af5e8db7bb2732d8.png",
  //     "alt": "bd55048a15200809a1aed131c912e8babba2f82c97cf24f9af5e8db7bb2732d8",
  //     "prompt": "Hyper realistic photo of a 14yearold german boy with curly brown hair, brown eyes next to black spitz breed dog. portrait. in forest summer sun shining through leafes in 2023."
  // },
  // {
  //     "src": "/STAR/samples/bd55048a15200809a1aed131c912e8babba2f82c97cf24f9af5e8db7bb2732d8.png",
  //     "alt": "bd55048a15200809a1aed131c912e8babba2f82c97cf24f9af5e8db7bb2732d8",
  //     "prompt": "Hyper realistic photo of a 14yearold german boy with curly brown hair, brown eyes next to black spitz breed dog. portrait. in forest summer sun shining through leafes in 2023."
  // },
  {
    "src": "/STAR/samples/1a4203ed1bb8554cc64dca943c3b06aeb8562764.png",
    "alt": "1a4203ed1bb8554cc64dca943c3b06aeb8562764",
    "prompt": "Fine art bird photography, amazing, hyper realistic, notable Nikon D850, 200mm f2."
  },
  {
    "src": "/STAR/samples/1ba6e2de35b42f101cc6b7b56fdd53d4b1bb79e0.png",
    "alt": "1ba6e2de35b42f101cc6b7b56fdd53d4b1bb79e0",
    "prompt": "A winterthemed profile picture of an awardwinning photograph of a white cat in the snow. The cat is sitting in the snow with its head tilted to the side. Snowflakes are visible falling around the cat, and the photograph is shot in a soft, dreamy style to create a serene and peaceful mood. The white color of the cat blends in perfectly with the snowy background, creating a minimalist and harmonious look. The profile picture is cropped to focus."
  },
  {
      "src": "/STAR/samples/8f55ea06cac45a3388f1afb0f9a0682f0bf56a578c563de4bc995054ebb5952b.png",
      "alt": "8f55ea06cac45a3388f1afb0f9a0682f0bf56a578c563de4bc995054ebb5952b",
      "prompt": "Professional photo of sangria cockail in a backyard garden with bright sunlight and greenery."
  },
  {
      "src": "/STAR/samples/5970aee04b6c58b3dce3e67b321372a640df0d7ea65c1274249dbd407036e600.png",
      "alt": "5970aee04b6c58b3dce3e67b321372a640df0d7ea65c1274249dbd407036e600",
      "prompt": "A young girl covered in light orange and yellow flowers, dressed in flowers, flowers in hair."
  },
  {
      "src": "/STAR/samples/61e63c1f266231733b87b43f5cf07f9b8492c3f3c82e263f9e182b318297e242.png",
      "alt": "61e63c1f266231733b87b43f5cf07f9b8492c3f3c82e263f9e182b318297e242",
      "prompt": "Photo realistic, macro seed, Leukospermum Katerina flower, professional photography, macro photography, insane detail, dew drops, Canon EF 180mm F3. 5L Macro USM lens, flowers in full focus, bokeh background, nature background."
  },
  {
      "src": "/STAR/samples/4e9ca6436174a0f6a4624054c3c60595abe3ede613f9df58271bdfd6c1708d8c.png",
      "alt": "4e9ca6436174a0f6a4624054c3c60595abe3ede613f9df58271bdfd6c1708d8c",
      "prompt": "Flowing river high in the himalayas, oriental village in background, cinematic, detailed, 8k."
  },
  {
      "src": "/STAR/samples/594cbf2a52d94e0ab50c4603d94eeaf38fd63d5040748744b7b012b476384112.png",
      "alt": "594cbf2a52d94e0ab50c4603d94eeaf38fd63d5040748744b7b012b476384112",
      "prompt": "Zebra, abstract oil painting with thick brushstrokes with layers of colors, wild mood."
  },
  {
      "src": "/STAR/samples/b9116074ba1e0c32decd7f12fa55dec6f029b801b6502ec1bb3a6db7501f8441.png",
      "alt": "b9116074ba1e0c32decd7f12fa55dec6f029b801b6502ec1bb3a6db7501f8441",
      "prompt": "A large glass raindrop filled with nature and desert landscape hyperrealistic, awardwinning photo, insanely detailed."
  },
  {
      "src": "/STAR/samples/4dcc2ea9c452b3a4779c7922cc7f7b8cb7e7dd869fa248bf68f5581ce4681597.png",
      "alt": "4dcc2ea9c452b3a4779c7922cc7f7b8cb7e7dd869fa248bf68f5581ce4681597",
      "prompt": "Beta fish paint in a splatter effect, Detailed image, artsy, multi colored, vibrant colors, hyper realistic, black background, close up."
  },
  {
      "src": "/STAR/samples/ed1c8bb4d3672cfba05f1226664de7f8e42a50d7fb3173b5d3853b1a2766954c.png",
      "alt": "ed1c8bb4d3672cfba05f1226664de7f8e42a50d7fb3173b5d3853b1a2766954c",
      "prompt": "Grey exotic shorthair, as an astronaut, copper eyes, flat face, space in the background, ar 169."
  },
  {
      "src": "/STAR/samples/cce7c48b70bbefaaf48ed287e72f09a215c47d07b82031160a99ff1c23ec6988.png",
      "alt": "cce7c48b70bbefaaf48ed287e72f09a215c47d07b82031160a99ff1c23ec6988",
      "prompt": "A closeup photograph of the decadent Fortress Stilt Indulgence dessert, served in a crystal clear glass on a white plate. The dessert consists of layers of rich dark chocolate mousse, creamy caramel sauce, and crunchy caramelized nuts, all topped with a delicate gold leaf, well lit by 3point lighting in a mediterran and modern kitchen with black elements."
  },
  {
      "src": "/STAR/samples/0376e31eba487803c43be77e7f35687678e93d453173b3798492230799246271.png",
      "alt": "0376e31eba487803c43be77e7f35687678e93d453173b3798492230799246271",
      "prompt": "Spectacular scene of the tall fjords in norway, snow on the mountains, frozen in time, dark night, stars in the sky, the green aurora borealis is bright, cinematic, photorealistic, hyperdetailed, dramatic."
  },
  {
      "src": "/STAR/samples/33d1f0bbd780f2af6c94c54453bcb0d10b598f7cc613306aa68dd040e24ba8ce.png",
      "alt": "33d1f0bbd780f2af6c94c54453bcb0d10b598f7cc613306aa68dd040e24ba8ce",
      "prompt": "Cinematic and realistic drone shot of mountains with lake, octane render , 16k, 3d hd."
  },
  {
      "src": "/STAR/samples/d027221d020d734907a96e96f55a9b08dae3bbbe5f893b28b082ae843e5a0497.png",
      "alt": "d027221d020d734907a96e96f55a9b08dae3bbbe5f893b28b082ae843e5a0497",
      "prompt": "A close up of Geraldine Nightstalker with dark brown hair green eyes, glowing multicolored orbs wearing master spellcaster robes adorned with patches and trophies, in ancient forest, mossy, dusky, stunning atmosphere ultrawide shot."
  },
  {
      "src": "/STAR/samples/88eb2c3c18a1a5e02464ee0a0f95dbcb18ac3ffe340374e23c9f7f186d248075.png",
      "alt": "88eb2c3c18a1a5e02464ee0a0f95dbcb18ac3ffe340374e23c9f7f186d248075",
      "prompt": "Letter made of flowers, The letter B, shown frontally, white background."
  },
  {
      "src": "/STAR/samples/541390da191f0dac611cc661f7fc4807f5aeaf6544b822d532d1428f7bf2afb7.png",
      "alt": "541390da191f0dac611cc661f7fc4807f5aeaf6544b822d532d1428f7bf2afb7",
      "prompt": "Photo of a woman standing in the rain wearing red wig, new york setting, sunlight on back of her shoulders, running make up, high angle photo, 85mm lens, nikon d800."
  },
  {
      "src": "/STAR/samples/11d7ff256947bf85b966b1cbadee54e54e9bb28c37c7e9f199746d80f7d4b2ec.png",
      "alt": "11d7ff256947bf85b966b1cbadee54e54e9bb28c37c7e9f199746d80f7d4b2ec",
      "prompt": "Beautiful glamorous perfect cosmic drag queen, Ultra realistic, photo realistic , Octane render, Details, Cyberpunk, 8K, Realistic lighting, Hyperrealism, Cinematic lighting, V Ray, Highly detailed, Ray tracing, Trending on Artstation, Digital painting, Sharp focus, Glitter, Vivid colors, Centered, Dynamic lighting, Photorealism, Cinematic, Creative, Ultra detailed, Volumetric light, higher consciousness being pose, mystical being, shamanic priestess, divine feminine, beautiful outfit, extra terrestrial, pearly colors, bioluminescence, close up, octane render, full body, a goddess, cosmos, spiritual."
  }
];

export default function Home() {
  return (
    <>
    <div
        className="hero min-h-screen bg-[url('/STAR/banner.jpg')]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w">
            <h1 className="mb-3 text-6xl font-bold text-yellow-200 font-serif">STAR</h1>
            <h1 className="mb-8 text-5xl font-bold"><span className="text-yellow-200">S</span>cale-wise <span className="text-yellow-200">T</span>ext-to-image generation via<br/> <span className="text-yellow-200">A</span>uto-<span className="text-yellow-200">R</span>egressive representations</h1>
            <div className="mb-3 text-neural-300 text-lg">
              <p>
                <span><a className="hover:underline" href="https://github.com/krennic999" target="_blank" rel="noopener">Xiaoxiao Ma</a><sup>1,3,*</sup>, </span>
                <span><a className="hover:underline" href="https://mhzhou.com" target="_blank" rel="noopener">Mohan Zhou</a><sup>2,3,*</sup>, </span>
                <span>Tao Liang<sup>3</sup>, </span>
                <span><a className="hover:underline" href="https://ylbai.me" target="_blank" rel="noopener">Yalong Bai</a><sup>3</sup>, </span>
                <span><a className="hover:underline" href="https://homepage.hit.edu.cn/zhaotiejun" target="_blank" rel="noopener">Tiejun Zhao</a><sup>2</sup>, </span>
                <span><a className="hover:underline" href="https://scholar.google.com/citations?user=D6ol9XkAAAAJ" target="_blank" rel="noopener">Huaian Chen</a><sup>1‡</sup>, </span>
                <span><a className="hover:underline" href="https://pmpi.ustc.edu.cn/2020/0719/c19781a439146/page.htm" target="_blank" rel="noopener">Yi Jin</a><sup>1‡</sup></span>
              </p>
            </div>
            <div className="mb-8 text-neural-300 text-base">
              <p>
                <span><sup>1</sup>University of Science and Technology of China, </span>
                <span><sup>2</sup>Harbin Institute of Technology, </span>
                <span><sup>3</sup>Du Xiaoman</span>
              </p>
            </div>
            <div className="mb-5 text-neural-300 text-base">
              <p>
                <sup>*</sup>Equal contribution: Work done during the internships of at Du Xiaoman.
              </p>
              <p>
                <span><sup>‡</sup>Corresponding author: <a href="mailto:anchen@mail.ustc.edu.cn">anchen@mail.ustc.edu.cn</a>, <a href="mailto:jinyi08@mail.ustc.edu.cn">jinyi08@ustc.edu.cn</a></span>
              </p>
            </div>
            <div className="flex justify-center ">
              <a role="button" className="btn border-white/40 bg-white/40 mr-3 w-24" href="https://github.com/krennic999/STAR" target="_blank" rel="noopener">Github</a>
              <a role="button" className="btn border-white/40 bg-white/40 mr-3 w-24" href="https://arxiv.org/abs/2406.10797" target="_blank" rel="noopener">ArXiv</a>
            </div>
          </div>
        </div>
    </div>

    <div className="flex min-h-screen flex-col p-16">
      <h1 className="mb-3 text-4xl font-bold pb-10">Performance & Comparison</h1>
      <div className="grid grid-cols-2 px-16 items-center text-center pb-10">
        <Image src="/STAR/performance-1.svg" alt="performance-1" className="w-9/12" loading="lazy" width={0} height={0} />
        <Image src="/STAR/performance-2.svg" alt="performance-2" className="w-9/12" loading="lazy" width={0} height={0} />
        <p className="text-base font-semibold text-gray-700 pt-1">Per-category FID on MJHQ-30K</p>
        <p className="text-base font-semibold text-gray-700 pt-1">Efficiency & CLIP-Score of 512x512 generation</p>
      </div>
      <p className="text-base leading-relaxed pr-16 pt-8 text-gray-600">
        STAR is a novel scale-wise text-to-image model that is effective and efficient in terms of performance.<br/>
        Notably, STAR also shows efficiency by requiring merely 2.95s to generate a 512&times;512 image (compared to 6.48s for PixArt-α). 
      </p>
    </div>

    <div className="flex min-h-screen flex-col p-16 bg-white">
      <h1 className="mb-3 text-4xl font-bold">Architecture of STAR</h1>
      <Image src="/STAR/framework.png" alt="architecture" className="w-8/12 place-self-center" loading="lazy" width={0} height={0} sizes="100vw" />
      <p className="text-base leading-relaxed pr-16 pt-8 text-gray-600">
        We present STAR, a Scale-wise Text-to-image model that employs scale-wise Auto-Regressive paradigm. 
        Unlike VAR, which is limited to class-conditioned synthesis within a fixed set of predetermined categories, 
        our STAR model enables <span className="italic font-semibold">text-driven open-set generation</span> through three key designs:
      </p>
      <ol className="text-base leading-relaxed pr-16 text-gray-600 list-decimal indent-4 py-1 list-inside">
        <li>To boost diversity and generalizability with unseen combinations of objects and concepts, we introduce a pre-trained text encoder to extract representations for textual constraints, which we then use as guidance.</li>
        <li>To improve the interactions between the generated images and fine-grained text guidance, making results more controllable, the additional cross-attention layers are incorporated at each scale.</li>
        <li>Given the natural structure correlation across different scales, we leverage the 2D Rotary Positional Encoding (RoPE) and tweak it into a normalized version. This ensures consistent interpretation of relative positions across images at different scales and stabilizes the training process.</li>
      </ol>
      <p className="text-base leading-relaxed pr-16 text-gray-600">
        Extensive experiments demonstrate that STAR surpasses existing benchmarks in terms of <span className="italic">fidelity</span>, 
        <span className="italic">image text consistency</span>, and <span className="italic">aesthetic quality</span>. <br/>
        Our findings emphasize the potential of auto-regressive methods in the field of high-quality image synthesis, 
        offering promising new directions for the T2I field currently dominated by diffusion methods.
      </p>
      </div>


    <div className="flex min-h-screen flex-col p-16">
      <h1 className="mb-3 text-4xl font-bold">Sample Generations</h1>
      <div className="carousel carousel-center p-4 grow space-x-4 rounded-box w-full">
      {sampleGenerations.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="relative">
                <Image
                  src={item.src}
                  className="rounded-box"
                  alt={item.alt}
                  loading="lazy"
                  width={512}
                  height={512}
                />
                <div className="absolute inset-0 z-10 bg-white text-left px-3 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300">
                  <p>{item.prompt}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <p className="text-base leading-relaxed pr-16 pt-8 text-gray-600">
        STAR produces realistic scenes and artistic images across various styles, 
        and it adeptly handles detailed elements such as textures and architecture.
      </p>
    </div>
    </>
  );
}
