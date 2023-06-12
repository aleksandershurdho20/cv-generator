export const jobData ={
  company:"64399d4188d106d08fb2c907",
  title: "",
  description: "",
  location: "",
  jobType: "",
  wage: 0,
  experience: 0,
  category: "",
  skills: [
    {
      name: "aftesi",
      value: "",
    },
  ],
}

export const jobCategories = [
    {
      title: "Finance",
      value: "finance",
    },
    {
      title: "Administrim",
      value: "administrim",
    },
  
    {
      title: "Sherbim Klienti",
      value: "sherbim_klienti",
    },
  
    {
      title: "Teknologji Informacioni",
      value: "teknologji_informacioni",
    },
  
    {
      title: "Burime Njerezore",
      value: "burime_njerezore",
    },
    {
      title: "Horeka (Hoteleri-Restorant-Kafe)",
      value: "horeka",
    },
    {
      title: "Instalime - Mirembajtje",
      value: "instalime_mirembajtje",
    },
    {
      title: "Mjekesore - Shendetesore",
      value: "mjekesore_shendetesore",
    },
    {
      title: "Ligjore",
      value: "ligjore",
    },
    {
      title: "Agronomi",
      value: "agronomi",
    },
    {
      title: "Gazetari",
      value: "gazetari",
    },
  ];
  
  export const jobType = [
    {
      title: "Me  Kohe te pjesshme",
      value: "part_time",
    },
    {
      title: "Me  Kohe te plote",
      value: "full_time",
    },
    {
      title: "Pune nga shtepia",
      value: "remote",
    },
  
    {
      title: "Praktike",
      value: "internship",
    },
  ];
  

  export const parsedCategoryTitle = (category) => jobCategories.find(job => job.value === category)?.title
