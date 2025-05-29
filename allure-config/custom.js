(async () => {
    const title = document.getElementById('title');
    const subtitle1 = document.getElementById('subtitle1');
    const subtitle2 = document.getElementById('subtitle2');

    const customResp = await fetch('/custom.json');
    const customJson = await customResp.json();
    const CustomData = await customJson;

    const envResp = await fetch('./widgets/environment.json');
    const envJson = await envResp.json();
    const EnvData = await envJson;

    const project = 'project: RahulPractice'.concat((EnvData.find(val => val.name.toLowerCase() === 'project')?.value[0] || '').toUpperCase()) || '';
    const environment = 'project: RahulPractice'.concat((EnvData.find(val => val.name.toLowerCase() === 'environment')?.value[0] || '').toUpperCase()) || '';


    /**
     * Priortizes data coming from custom.json file
     * If This data is not present, it will retrieve the environment value
     * and project value 
     */
    title.innerHTML = CustomData.title;
    subtitle1.innerHTML = CustomData.subtitle1 || project;
    subtitle2.innerHTML = CustomData.subtitle2 || environment;

    /**remove subtitle 1 if no data from custom.json file and no project from allure*/
    if(CustomData.subtitle1 && !project){
        subtitle1.style.display = 'none';
    }
    /**remove subtitle 2 if no data from custom.json file and no env from allure */
    if(CustomData.subtitle2 && !environment){
        subtitle2.style.display = 'none';
    }
}
)();