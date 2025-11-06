
const executeSketchfabMethods = () => {
    console.log("Aqui el 1!!!!!!!!!!!!!!!");

    /*
GENERAL RULES:
- 'Material' means an object such as "Patas", "Respaldo", etc. Don't confuse it with 'Texture' which is used for textures like "Piel Gris", "Tela Azul", etc.
- Normal-Map and Bump-Map can't be combined
- Roughness and Glossiness can't be combined
- If you modify a property in one button (e.g. metalnessFactor), you should take care of that property in all of the buttons.

*/

    const paramsExample = {
        id: "xxxxxxxxxxxxxxxxxxxx", // Model ID (Required)
        sections: [
            {
                title: "ACABADOS POR FUERA", // (Optional)
                buttons: [
                    {
                        // MATERIAL (OBJECT) TO MODIFY (Required)
                        materialName: "TAPIZ", // Name of the material/object as it appears on 'Sketchfab' (E.g. TAPIZ, PATAS)


                        // TEXTURE: Texture to show. (Required)
                        urlTextureImageName: "Piel1", // Choose any of the preloaded textures in myURLTextures 
                        sketchfabTextureImageName: "PIEL_01_NRM.jpg", // Name of the texture as it appears on 'Sketchfab' (E.g. "PIEL_01_NRM.jpg", "PIEL_01_GLOS.jpg". The file extension is optional, so you can just type "PIEL_01_NRM", "PIEL_01_GLOS"). Not reccommended since we also need texture for the button.


                        // OVERRIDE button texture o color (Optional)
                        customButtonTexture: "", //  Name of a preloaded texture in myURLTextures. Use only if you want to use a different image from the 'urlTextureImageName' (e.g. To use a low resolution image), or when using 'sketchfabTextureImageName'
                        customButtonColor: "#0081eb", //  HEXA Color. Use only if you want override the button background with a color.


                        // NORMAL MAP / BUMP MAP (Optional)
                        // You can set a Normal-Map or a Bump-Map, BUT NOT BOTH AT THE SAME TIME.
                        normalMapImageName: "PielNormalMap", // Choose any of the preloaded textures in myURLTextures 
                        normalMapFactor: 0.65, // Value between 0 and 1
                        bumpMapImageName: "BumpNormalMap", // Choose any of the preloaded textures in myURLTextures 
                        bumpMapFactor: 9, // Value between 0 and 10


                        // ROUGHNESS / GLOSSINESS (Optional)
                        // You can set a Roughness or a Glossiness, BUT NOT BOTH AT THE SAME TIME.
                        roughnessImageName: "PielRoughness", // Choose any of the preloaded textures in myURLTextures 
                        roughnessFactor: 0.65, // Value between 0 and 1
                        glossinessImageName: "PielGlossiness", // Choose any of the preloaded textures in myURLTextures 
                        glossinessFactor: 0.8, // Value between 0 and 1


                        // METALNESS (Optional)
                        metalnessFactor: 0,// Value between 0 and 1
                    }
                ]
            },
        ]
    }

    const telaAzul = {
        materialName: "wire_224086086",
        urlTextureImageName: "TelaAzul",
    }
    const telaNaranja = {
        materialName: "wire_224086086",
        urlTextureImageName: "TelaNaranja",
    }
    const telaVerde = {
        materialName: "wire_224086086",
        urlTextureImageName: "TelaVerde",
    }
    const telaAmarilla = {
        materialName: "wire_224086086",
        urlTextureImageName: "TelaAmarilla",
    }
    const baseBlanca = {
        materialName: "wire_008008136",
        urlTextureImageName: "BaseBlanca",
        metalnessFactor: 0,
    }
    const baseNegra = {
        materialName: "wire_008008136",
        urlTextureImageName: "BaseNegra",
        metalnessFactor: 0,
    }
    const baseCromada = {
        materialName: "wire_008008136",
        urlTextureImageName: "BaseCromada",
        metalnessFactor: 1,
        customButtonTexture: "BotonCromado",
    }

    const params = {
        id: "5b1e08fab9f64d26bbdfdc71fcd5bfda", // (Required)
        sections: [
            {
                title: "TELA", // (Optional)
                buttons: [
                    telaAzul,
                    telaNaranja,
                    telaVerde,
                    telaAmarilla,
                ]
            },
            {
                title: "BASE", // (Optional)
                buttons: [
                    baseBlanca,
                    baseNegra,
                    baseCromada,
                ]
            },
        ]
    }



    // To upload images an generate ULRs you can use https://postimages.org/
    var myURLTextures = [
        {
            name: "TelaAzul",
            url: "https://static.wixstatic.com/media/ca2f8b_783bb9b64bc74f19bbc506325dff3482~mv2.jpg/v1/fill/w_675,h_675,al_c,q_85,usm_0.66_1.00_0.01/AZUL.jpg",
            uid: "",
        },
        {
            name: "TelaNaranja",
            url: "https://static.wixstatic.com/media/ca2f8b_9c1c9209c7c34c5894fc1b0c3c4b4a63~mv2.jpg/v1/fill/w_675,h_675,al_c,q_85,usm_0.66_1.00_0.01/ROJO.jpg",
            uid: "",
        },
        {
            name: "TelaVerde",
            url: "https://static.wixstatic.com/media/ca2f8b_46d6d358de81415a82ecf292ef1bb200~mv2.jpg/v1/fill/w_675,h_675,al_c,q_85,usm_0.66_1.00_0.01/VERDE.jpg",
            uid: "",
        },
        {
            name: "TelaAmarilla",
            url: "https://static.wixstatic.com/media/ca2f8b_2f7a10d4d6944c4383580966b0d9a57b~mv2.jpg/v1/fill/w_675,h_675,al_c,q_85,usm_0.66_1.00_0.01/AMARILLO.jpg",
            uid: "",
        },
        {
            name: "BaseBlanca",
            url: "https://static.wixstatic.com/media/ca2f8b_304b87c7a5b04c71a2253f5c36f6c555~mv2.jpg/v1/fill/w_190,h_190,al_c,q_80/BlancoObscuro.jpg",
            uid: "",
        },
        {
            name: "BaseNegra",
            url: "https://static.wixstatic.com/media/ca2f8b_f66503ebe62c40d1b36702521975b455~mv2.jpg/v1/fill/w_315,h_315,al_c,lg_1,q_80/Negro.jpg",
            uid: "",
        },
        {
            name: "BaseCromada",
            url: "https://static.wixstatic.com/media/ca2f8b_f8c663252fff4d18ad3fc2a4524fc8b4~mv2.jpg/v1/fill/w_252,h_252,al_c,q_80/Blanco.jpg",
            uid: "",
        },
        {
            name: "BotonCromado",
            url: "https://static.wixstatic.com/media/ca2f8b_7238e4710bdb445aba85c90345643e2e~mv2.jpg/v1/fill/w_88,h_88,al_c,lg_1,q_80/GRIS_lowRes.jpg",
            uid: "",
        },
    ];





    console.log("Code developed by https://ricardohs.com/");
    var iframe = document.getElementById('api-frame');
    var uid = params.id; //obj
    var client = new Sketchfab(iframe);

    //JQUERY
    $(document).ready(function () {

        // Adds some style to buttons
        $(".btn").focusin(function () {
            $('.btn').css('outline', ''); // Remove Before set color to selected button
            $(this).css("outline", "solid rgb(170, 170, 170) 2px"); // Set Color to Selected Button outline: solid rgb(63, 63, 63);
        });


        // Generate buttons by using the JSON
        const sectionsContainer = $("#sections-container");
        params.sections.forEach((section, sectionIndex) => {
            const $material = $("<div>").addClass("material");

            // Optional title
            if (section.title) {
                $("<div>").addClass("encabezado").text(section.title).appendTo($material);
            }

            const $botones = $("<div>").addClass("botones");

            section.buttons.forEach((button, buttonIndex) => {
                const urlImageName = button.customButtonTexture || button.urlTextureImageName;

                const $btn = $("<button>")
                    .addClass("btn")
                    .attr("id", `s${sectionIndex}b${buttonIndex}`);

                if (urlImageName) {
                    $btn.css("background-image", `url('${myURLTextures.find(texture => texture.name === urlImageName).url}')`);
                }

                if (button.customButtonColor) {
                    $btn.css("background-color", button.customButtonColor);
                }

                $botones.append($btn).append("\n");
            });

            $material.append($botones);
            sectionsContainer.append($material);
        });
    });


    client.init(uid, {
        success: function onSuccess(api) {
            api.start();
            api.addEventListener('viewerready', function () {

                // Attach de event listeners to all buttons
                function attachButtonListeners(sections) {
                    sections.forEach((section, sectionIndex) => {
                        section.buttons.forEach((button, buttonIndex) => {
                            const btnId = `s${sectionIndex}b${buttonIndex}`;
                            const boton = document.getElementById(btnId);

                            if (boton) {
                                boton.addEventListener("click", function () {
                                    updateMaterial(button);
                                });
                            } else {
                                console.warn(`Button with ID ${btnId} not found.`);
                            }
                        });
                    });
                }

                attachButtonListeners(params.sections);



                //VARIABLES NECESARIAS
                var myMaterials = [];
                var mySketchfabTextures = [];

                // Obtiene Materiales (NO TEXTURAS Ej: Tubo y Respaldo)
                api.getMaterialList(function (err, materials) {
                    if (!err) {
                        myMaterials = materials;
                        console.log("My materials:", myMaterials);
                    } else {
                        console.log("Error al descargar materiales");
                    }


                });

                // Obtiene Texturas existentes en el modelo de Sketchfab
                api.getTextureList(function (err, textures) {
                    if (!err) {
                        mySketchfabTextures = textures;
                        console.log("My Sketchfab textures:", mySketchfabTextures);
                    } else {
                        console.log("Error al descargar texturas");
                    }
                });

                // Downloads textures and saves UID
                myURLTextures.forEach(function (texture) {
                    api.addTexture(texture.url, function (err, textureUid) {
                        if (!err) {
                            texture.uid = textureUid;
                        } else {
                            console.log("No cargó imagen " + texture.name);
                        }

                    })
                });

                console.log("My URL textures", myURLTextures);

                function updateMaterial({ materialName, urlTextureImageName, sketchfabTextureImageName, normalMapImageName, normalMapFactor, bumpMapImageName, bumpMapFactor, roughnessImageName, roughnessFactor, glossinessImageName, glossinessFactor, metalnessFactor }) {


                    var selectedMaterial = myMaterials.find(mat => mat.name === materialName);

                    if (selectedMaterial == null) {
                        console.log(materialName + " no encontrado");
                        return;
                    }

                    if (urlTextureImageName != null) {
                        selectedMaterial.channels.AlbedoPBR.texture.uid = myURLTextures.find(texture => texture.name === urlTextureImageName).uid;
                    }

                    if (sketchfabTextureImageName != null) {
                        selectedMaterial.channels.AlbedoPBR.texture.uid = mySketchfabTextures.find(texture => texture.name.startsWith(sketchfabTextureImageName)).uid;
                    }

                    if (normalMapImageName != null) {
                        selectedMaterial.channels.BumpMap.enable = false;
                        selectedMaterial.channels.NormalMap.enable = true;
                        if (selectedMaterial.channels.NormalMap.texture == null) {
                            selectedMaterial.channels.NormalMap.texture = {};
                        }
                        selectedMaterial.channels.NormalMap.texture.uid = myURLTextures.find(text => text.name === normalMapImageName).uid;
                    }

                    if (normalMapFactor != null) {
                        selectedMaterial.channels.BumpMap.enable = false;
                        selectedMaterial.channels.NormalMap.enable = true;
                        selectedMaterial.channels.NormalMap.factor = normalMapFactor;
                    }

                    if (bumpMapImageName != null) {
                        selectedMaterial.channels.BumpMap.enable = true;
                        selectedMaterial.channels.NormalMap.enable = false;
                        if (selectedMaterial.channels.BumpMap.texture == null) {
                            selectedMaterial.channels.BumpMap.texture = {};
                        }
                        selectedMaterial.channels.BumpMap.texture.uid = myURLTextures.find(text => text.name === bumpMapImageName).uid;
                    }

                    if (bumpMapFactor != null) {
                        selectedMaterial.channels.BumpMap.enable = true;
                        selectedMaterial.channels.NormalMap.enable = false;
                        selectedMaterial.channels.BumpMap.factor = bumpMapFactor;
                    }

                    if (roughnessImageName != null) {
                        selectedMaterial.channels.GlossinessPBR.enable = false;
                        selectedMaterial.channels.RoughnessPBR.enable = true;
                        if (selectedMaterial.channels.RoughnessPBR.texture == null) {
                            selectedMaterial.channels.RoughnessPBR.texture = {};
                        }
                        selectedMaterial.channels.RoughnessPBR.texture.uid = myURLTextures.find(text => text.name === roughnessImageName).uid;
                    }

                    if (roughnessFactor != null) {
                        selectedMaterial.channels.GlossinessPBR.enable = false;
                        selectedMaterial.channels.RoughnessPBR.enable = true;
                        selectedMaterial.channels.RoughnessPBR.factor = roughnessFactor;
                    }

                    if (glossinessImageName != null) {
                        selectedMaterial.channels.GlossinessPBR.enable = true;
                        selectedMaterial.channels.RoughnessPBR.enable = false;
                        if (selectedMaterial.channels.GlossinessPBR.texture == null) {
                            selectedMaterial.channels.GlossinessPBR.texture = {};
                        }
                        selectedMaterial.channels.GlossinessPBR.texture.uid = myURLTextures.find(text => text.name === glossinessImageName).uid;
                    }

                    if (glossinessFactor != null) {
                        selectedMaterial.channels.GlossinessPBR.enable = true;
                        selectedMaterial.channels.GlossinessPBR.enable = false;
                        selectedMaterial.channels.GlossinessPBR.factor = glossinessFactor;
                    }

                    if (metalnessFactor != null) {
                        selectedMaterial.channels.MetalnessPBR.factor = metalnessFactor;
                    }

                    api.setMaterial(selectedMaterial);
                    console.log("Final material", selectedMaterial);
                }

            });
        },
        error: function onError() {
            console.log('Viewer error');
        },
        preload: 0,
        autospin: 0,
    });
}


const init = () => {
    console.log("Hello world from sketchfab.js! lelele");

    const testAlert = () => {
        alert("This is a test alert from sketchfab.js!");
    }

    const executeSketchfabMethodsInit = () => {
        executeSketchfabMethods();
    }

    window._testAlert = testAlert;
    window._executeSketchfabMethods = executeSketchfabMethodsInit;
}


window.onload = () => {
    init();
}
