vertexShaderSource = "\n\
    attribute vec4 position;\n\
    attribute vec2 texCoord;\n\
    attribute vec2 coordinateOrn1;\n\
    attribute vec2 coordinateOrn2;\n\
    attribute vec2 coordinateOrn3;\n\
    attribute vec2 coordinateOrn4;\n\
    attribute vec2 coordinateOrn5;\n\
    attribute vec2 coordinateOrn6;\n\
    attribute vec2 coordinateOrn7;\n\
    \n\
    \n\
    varying vec2 v_texCoord;  \n\
    varying vec2 v_coordinateOrn1;\n\
    varying vec2 v_coordinateOrn2;\n\
    varying vec2 v_coordinateOrn3;\n\
    varying vec2 v_coordinateOrn4;\n\
    varying vec2 v_coordinateOrn5;\n\
    varying vec2 v_coordinateOrn6;\n\
    varying vec2 v_coordinateOrn7;\n\
    \n\
    void main()  \n\
    {            \n\
    gl_Position = position;\n\
    v_texCoord = texCoord; \n\
    v_coordinateOrn1 = coordinateOrn1.xy;\n\
    v_coordinateOrn2 = coordinateOrn2.xy;\n\
    v_coordinateOrn3 = coordinateOrn3.xy;\n\
    v_coordinateOrn4 = coordinateOrn4.xy;\n\
    v_coordinateOrn5 = coordinateOrn5.xy;\n\
    v_coordinateOrn6 = coordinateOrn6.xy;\n\
    v_coordinateOrn7 = coordinateOrn7.xy;\n\
    \n\
    }\n\
"

fragmentShaderSource = {
   cutecat: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
       uniform int mouthOpen; \n\
        \n\
        \n\
       void mainImage( out vec4 fragColor, in vec2 fragCoord ,in vec3 iResolution) \n\
       { \n\
        \n\
       vec4 A = texture2D(frameOrn1, v_coordinateOrn1).rgba; \n\
       vec4 B = texture2D(frameOrn2, v_coordinateOrn2).rgba; \n\
       vec4 C = texture2D(frameOrn3, v_coordinateOrn3).rgba; \n\
       vec4 D = texture2D(frameOrn4, v_coordinateOrn4).rgba; \n\
       vec4 E = texture2D(frameOrn5, v_coordinateOrn5).rgba; \n\
       vec4 F = texture2D(frameOrn6, v_coordinateOrn6).rgba; \n\
       vec4 G = texture2D(frameOrn7, v_coordinateOrn7).rgba; \n\
        \n\
       vec4 origin = texture2D(texture, v_texCoord); \n\
        \n\
       if (v_coordinateOrn1.x < 1.0 && v_coordinateOrn1.x > 0.0 && v_coordinateOrn1.y < 1.0 && v_coordinateOrn1.y > 0.0 && A.a > 0.5){ \n\
       fragColor = A; \n\
       } \n\
       else if (v_coordinateOrn2.x < 1.0 && v_coordinateOrn2.x > 0.0 && v_coordinateOrn2.y < 1.0 && v_coordinateOrn2.y > 0.0 && B.a > 0.5){ \n\
       fragColor = B; \n\
        \n\
       } \n\
       else if (v_coordinateOrn3.x < 1.0 && v_coordinateOrn3.x > 0.0 && v_coordinateOrn3.y < 1.0 && v_coordinateOrn3.y > 0.0 && C.a > 0.5){ \n\
       fragColor = C; \n\
       } \n\
       else if (v_coordinateOrn4.x < 1.0 && v_coordinateOrn4.x > 0.0 && v_coordinateOrn4.y < 1.0 && v_coordinateOrn4.y > 0.0 && D.a > 0.5){ \n\
       fragColor = D; \n\
       } \n\
       else if (v_coordinateOrn5.x < 1.0 && v_coordinateOrn5.x > 0.0 && v_coordinateOrn5.y < 1.0 && v_coordinateOrn5.y > 0.0 && E.a > 0.5 && mouthOpen == 1){ \n\
       fragColor = E; \n\
       } \n\
       else if (v_coordinateOrn6.x < 1.0 && v_coordinateOrn6.x > 0.0 && v_coordinateOrn6.y < 1.0 && v_coordinateOrn6.y > 0.0 && F.a > 0.5){ \n\
       fragColor = F; \n\
       } \n\
       else if (v_coordinateOrn7.x < 1.0 && v_coordinateOrn7.x > 0.0 && v_coordinateOrn7.y < 1.0 && v_coordinateOrn7.y > 0.0 && G.r > 0.2  && G.g > 0.2 && G.b > 0.2){ \n\
       fragColor = G; \n\
       } \n\
       else{ \n\
       fragColor = origin; \n\
       } \n\
       } \n\
        \n\
       void main() { \n\
       vec3 iResolution = vec3(6400, 4800, 1.0); \n\
       mainImage(gl_FragColor, v_texCoord*iResolution.xy, iResolution); \n\
        \n\
        \n\
       } \n\
       ",
    contrast: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
        \n\
       float remap(float value, float inputMin, float inputMax, float outputMin, float outputMax) \n\
       { \n\
       return (value - inputMin) * ((outputMax - outputMin) / (inputMax - inputMin)) + outputMin; \n\
       } \n\
        \n\
       void mainImage( out vec4 fragColor, in vec2 fragCoord ) \n\
       { \n\
       vec2 uv = fragCoord.xy; \n\
       float normalizedContrast = 1.0; \n\
       float contrast = remap(normalizedContrast, 0.0, 1.0, 0.2 /*min*/, 4.0 /*max*/); \n\
        \n\
       vec4 srcColor = texture2D(texture, uv); \n\
       vec4 dstColor = vec4((srcColor.rgb - vec3(0.5)) * contrast + vec3(0.5), 1.0); \n\
       fragColor = clamp(dstColor, 0.0, 1.0); \n\
       } \n\
        \n\
       void main() { \n\
       mainImage(gl_FragColor, v_texCoord); \n\
       } \n\
       ",
    cracked: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
        \n\
       float rnd(vec2 s) \n\
       { \n\
       return 1.-2.*fract(sin(s.x*253.13+s.y*341.41)*589.19); \n\
       } \n\
        \n\
       void mainImage( out vec4 fragColor, in vec2 fragCoord, in vec3 iResolution) \n\
       { \n\
       vec2 p=(fragCoord.xy*2.-iResolution.xy)/iResolution.x; \n\
        \n\
       vec2 v=vec2(1E3); \n\
       vec2 v2=vec2(1E4); \n\
       vec2 center=vec2(.1,-.5); \n\
       for(int c=0;c<30;c++) \n\
       { \n\
       float angle=floor(rnd(vec2(float(c),387.44))*16.)*3.1415*.4-.5; \n\
       float dist=pow(rnd(vec2(float(c),78.21)),2.)*.5; \n\
       vec2 vc=vec2(center.x+cos(angle)*dist+rnd(vec2(float(c),349.3))*7E-3, \n\
       center.y+sin(angle)*dist+rnd(vec2(float(c),912.7))*7E-3); \n\
       if(length(vc-p)<length(v-p)) \n\
       { \n\
       v2=v; \n\
       v=vc; \n\
       } \n\
       else if(length(vc-p)<length(v2-p)) \n\
       { \n\
       v2=vc; \n\
       } \n\
       } \n\
        \n\
       float col=abs(length(dot(p-v,normalize(v-v2)))-length(dot(p-v2,normalize(v-v2))))+.002*length(p-center); \n\
       col=7E-4/col; \n\
       if(length(v-v2)<4E-3)col=0.; \n\
       //    if(length(v-p)<4E-3)col=1E-6; \n\
       if(col<.3)col=0.; \n\
       vec4 tex=texture2D(texture,(fragCoord.xy)/iResolution.xy+rnd(v)*.02); \n\
       fragColor=col*vec4(vec3(1.-tex.xyz),1.)+(1.-col)*tex; \n\
       } \n\
        \n\
       void main() { \n\
       vec3 iResolution = vec3(640, 480, 1.0); \n\
       mainImage(gl_FragColor, v_texCoord * iResolution.xy, iResolution); \n\
       } \n\
       ",
    crosshatch: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
       vec3 iResolution = vec3(640, 480, 1.0); \n\
        \n\
        \n\
       // The brightnesses at which different hatch lines appear \n\
       float hatch_1 = 0.8; \n\
       float hatch_2 = 0.6; \n\
       float hatch_3 = 0.3; \n\
       float hatch_4 = 0.15; \n\
        \n\
       // How close together hatch lines should be placed \n\
       float density = 10.0; \n\
        \n\
       // How wide hatch lines are drawn. \n\
       float width = 1.0; \n\
        \n\
       // enable GREY_HATCHES for greyscale hatch lines \n\
       #define GREY_HATCHES \n\
        \n\
       // enable COLOUR_HATCHES for coloured hatch lines \n\
       #define COLOUR_HATCHES \n\
        \n\
       #ifdef GREY_HATCHES \n\
       float hatch_1_brightness = 0.8; \n\
       float hatch_2_brightness = 0.6; \n\
       float hatch_3_brightness = 0.3; \n\
       float hatch_4_brightness = 0.0; \n\
       #else \n\
       float hatch_1_brightness = 0.0; \n\
       float hatch_2_brightness = 0.0; \n\
       float hatch_3_brightness = 0.0; \n\
       float hatch_4_brightness = 0.0; \n\
       #endif \n\
        \n\
       float d = 1.0; // kernel offset \n\
        \n\
       float lookup(vec2 p, float dx, float dy) \n\
       { \n\
       vec2 uv = (p.xy + vec2(dx * d, dy * d)) / iResolution.xy; \n\
       vec4 c = texture2D(texture, uv.xy); \n\
        \n\
       // return as luma \n\
       return 0.2126*c.r + 0.7152*c.g + 0.0722*c.b; \n\
       } \n\
        \n\
        \n\
       void mainImage( out vec4 fragColor, in vec2 fragCoord ) \n\
       { \n\
       float ratio = iResolution.y / iResolution.x; \n\
       float coordX = fragCoord.x / iResolution.x; \n\
       float coordY = fragCoord.y / iResolution.x; \n\
       vec2 dstCoord = vec2(coordX, coordY); \n\
       vec2 srcCoord = vec2(coordX, coordY / ratio); \n\
       vec2 uv = srcCoord.xy; \n\
        \n\
       vec3 res = vec3(1.0, 1.0, 1.0); \n\
       vec4 tex = texture2D(texture, uv); \n\
       float brightness = (0.2126*tex.x) + (0.7152*tex.y) + (0.0722*tex.z); \n\
       #ifdef COLOUR_HATCHES \n\
       float dimmestChannel = min( min( tex.r, tex.g ), tex.b ); \n\
       float brightestChannel = max( max( tex.r, tex.g ), tex.b ); \n\
       float delta = brightestChannel - dimmestChannel; \n\
       if ( delta > 0.1 ) \n\
       tex = tex * ( 1.0 / brightestChannel ); \n\
       else \n\
       tex.rgb = vec3(1.0,1.0,1.0); \n\
       #endif // COLOUR_HATCHES \n\
        \n\
       if (brightness < hatch_1) \n\
       { \n\
       if (mod(fragCoord.x + fragCoord.y, density) <= width) \n\
       { \n\
       #ifdef COLOUR_HATCHES \n\
       res = vec3(tex.rgb * hatch_1_brightness); \n\
       #else \n\
       res = vec3(hatch_1_brightness); \n\
       #endif \n\
       } \n\
       } \n\
        \n\
       if (brightness < hatch_2) \n\
       { \n\
       if (mod(fragCoord.x - fragCoord.y, density) <= width) \n\
       { \n\
       #ifdef COLOUR_HATCHES \n\
       res = vec3(tex.rgb * hatch_2_brightness); \n\
       #else \n\
       res = vec3(hatch_2_brightness); \n\
       #endif \n\
       } \n\
       } \n\
        \n\
       if (brightness < hatch_3) \n\
       { \n\
       if (mod(fragCoord.x + fragCoord.y - (density*0.5), density) <= width) \n\
       { \n\
       #ifdef COLOUR_HATCHES \n\
       res = vec3(tex.rgb * hatch_3_brightness); \n\
       #else \n\
       res = vec3(hatch_3_brightness); \n\
       #endif \n\
       } \n\
       } \n\
        \n\
       if (brightness < hatch_4) \n\
       { \n\
       if (mod(fragCoord.x - fragCoord.y - (density*0.5), density) <= width) \n\
       { \n\
       #ifdef COLOUR_HATCHES \n\
       res = vec3(tex.rgb * hatch_4_brightness); \n\
       #else \n\
       res = vec3(hatch_4_brightness); \n\
       #endif \n\
       } \n\
       } \n\
        \n\
       vec2 p = fragCoord.xy; \n\
        \n\
       float gx = 0.0; \n\
       gx += -1.0 * lookup(p, -1.0, -1.0); \n\
       gx += -2.0 * lookup(p, -1.0,  0.0); \n\
       gx += -1.0 * lookup(p, -1.0,  1.0); \n\
       gx +=  1.0 * lookup(p,  1.0, -1.0); \n\
       gx +=  2.0 * lookup(p,  1.0,  0.0); \n\
       gx +=  1.0 * lookup(p,  1.0,  1.0); \n\
        \n\
       float gy = 0.0; \n\
       gy += -1.0 * lookup(p, -1.0, -1.0); \n\
       gy += -2.0 * lookup(p,  0.0, -1.0); \n\
       gy += -1.0 * lookup(p,  1.0, -1.0); \n\
       gy +=  1.0 * lookup(p, -1.0,  1.0); \n\
       gy +=  2.0 * lookup(p,  0.0,  1.0); \n\
       gy +=  1.0 * lookup(p,  1.0,  1.0); \n\
        \n\
       // hack: use g^2 to conceal noise in the video \n\
       float g = gx*gx + gy*gy; \n\
       res *= (1.0-g); \n\
        \n\
       fragColor = vec4(res, 1.0); \n\
       } \n\
        \n\
       void main() { \n\
       mainImage(gl_FragColor, v_texCoord * iResolution.xy); \n\
       } \n\
       ",
    edge: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
       //uniform float width; \n\
       //uniform float height; \n\
        \n\
       void main() \n\
       { \n\
       float width = 640.0; \n\
       float height = 480.0; \n\
       vec4 pixel = texture2D(texture, v_texCoord); \n\
       vec4 n[9]; \n\
        \n\
       float w = 1.0 / width; \n\
       float h = 1.0 / height; \n\
        \n\
       n[0] = texture2D(texture, v_texCoord + vec2(0.0, 0.0) ); \n\
       n[1] = texture2D(texture, v_texCoord + vec2(w, 0.0) ); \n\
       n[2] = texture2D(texture, v_texCoord + vec2(2.0*w, 0.0) ); \n\
       n[3] = texture2D(texture, v_texCoord + vec2(0.0*w, h) ); \n\
       n[4] = texture2D(texture, v_texCoord + vec2(w, h) ); \n\
       n[5] = texture2D(texture, v_texCoord + vec2(2.0*w, h) ); \n\
       n[6] = texture2D(texture, v_texCoord + vec2(0.0, 2.0*h) ); \n\
       n[7] = texture2D(texture, v_texCoord + vec2(w, 2.0*h) ); \n\
       n[8] = texture2D(texture, v_texCoord + vec2(2.0*w, 2.0*h) ); \n\
        \n\
       vec4 sobel_x = n[2] + (2.0*n[5]) + n[8] - (n[0] + (2.0*n[3]) + n[6]); \n\
       vec4 sobel_y = n[0] + (2.0*n[1]) + n[2] - (n[6] + (2.0*n[7]) + n[8]); \n\
        \n\
       float avg_x = (sobel_x.r + sobel_x.g + sobel_x.b) / 3.0; \n\
       float avg_y = (sobel_y.r + sobel_y.g + sobel_y.b) / 3.0; \n\
        \n\
       sobel_x.r = avg_x; \n\
       sobel_x.g = avg_x; \n\
       sobel_x.b = avg_x; \n\
       sobel_y.r = avg_y; \n\
       sobel_y.g = avg_y; \n\
       sobel_y.b = avg_y; \n\
        \n\
       vec3 sobel = vec3(sqrt((sobel_x.rgb * sobel_x.rgb) + (sobel_y.rgb * sobel_y.rgb))); \n\
       gl_FragColor = vec4( sobel, 1.0 ); \n\
       } \n\
       ",
    esuqe: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
       vec3 iResolution = vec3(6400, 4800, 1.0); \n\
        \n\
       // Size of the quad in pixels \n\
       const float size = 15.0; \n\
        \n\
       // Radius of the circle \n\
       const float radius = size * 0.5; \n\
        \n\
       void mainImage( out vec4 fragColor, in vec2 fragCoord ) \n\
       { \n\
       // Current quad in pixels \n\
       vec2 quadPos = floor(fragCoord.xy / size) * size; \n\
       // Normalized quad position \n\
       vec2 quad = quadPos/iResolution.xy; \n\
       // Center of the quad \n\
       vec2 quadCenter = (quadPos + size/2.0); \n\
       // Distance to quad center \n\
       float dist = length(quadCenter - fragCoord.xy); \n\
        \n\
       vec4 texel = texture2D(texture, quad); \n\
       if (dist > radius) \n\
       { \n\
       fragColor = vec4(0.25); \n\
       } \n\
       else \n\
       { \n\
       fragColor = texel; \n\
       } \n\
       } \n\
        \n\
        \n\
       void main() { \n\
       mainImage(gl_FragColor, v_texCoord*iResolution.xy); \n\
       } \n\
       ",
    lego: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
       float c = 0.02; //amout of blocks = c*iResolution.x \n\
       vec3 iResolution = vec3(10240, 5680, 1.0); \n\
        \n\
       void mainImage( out vec4 fragColor, in vec2 fragCoord ){ \n\
       //blocked pixel coordinate \n\
       vec2 middle = floor(fragCoord*c+.5)/c; \n\
        \n\
       vec3 color = texture2D(texture, middle/iResolution.xy).rgb; \n\
        \n\
       //lego block effects \n\
       //stud \n\
       float dis = distance(fragCoord,middle)*c*2.; \n\
       if(dis<.65&&dis>.55){ \n\
       color *= dot(vec2(0.707),normalize(fragCoord-middle))*.5+1.; \n\
       } \n\
        \n\
       //side shadow \n\
       vec2 delta = abs(fragCoord-middle)*c*2.; \n\
       float sdis = max(delta.x,delta.y); \n\
       if(sdis>.9){ \n\
       color *= .8; \n\
       } \n\
        \n\
       fragColor = vec4(color,1.0); \n\
       } \n\
        \n\
       void main() { \n\
       mainImage(gl_FragColor, v_texCoord*iResolution.xy); \n\
       } \n\
       ",
    money: "\n\
       precision mediump float; \n\
       uniform sampler2D u_image; \n\
       uniform vec2 resolution; \n\
       varying vec2 v_texCoord; \n\
        \n\
        \n\
       void mainImage( out vec4 fragColor, in vec2 fragCoord ,in vec3 iResolution) \n\
       { \n\
       vec2 xy = fragCoord.xy / iResolution.yy; \n\
       float amplitud = 0.03; \n\
       float frecuencia = 10.0; \n\
       float gris = 1.0; \n\
       float divisor = 8.0 / iResolution.y; \n\
       float grosorInicial = divisor * 0.2; \n\
       const int kNumPatrones = 6; \n\
       vec3 datosPatron[kNumPatrones]; \n\
       datosPatron[0] = vec3(-0.7071, 0.7071, 3.0); \n\
       datosPatron[1] = vec3(0.0, 1.0, 0.6); \n\
       datosPatron[2] = vec3(0.0, 1.0, 0.5); \n\
       datosPatron[3] = vec3(1.0, 0.0, 0.4); \n\
       datosPatron[4] = vec3(1.0, 0.0, 0.3); \n\
       datosPatron[5] = vec3(0.0, 1.0, 0.2); \n\
        \n\
       vec4 color = texture2D(u_image, vec2(fragCoord.x / iResolution.x, xy.y)); \n\
       fragColor = color; \n\
        \n\
       for(int i = 0; i < kNumPatrones; i++) \n\
       { \n\
       float coseno = datosPatron[i].x; \n\
       float seno = datosPatron[i].y; \n\
        \n\
       vec2 punto = vec2( \n\
       xy.x * coseno - xy.y * seno, \n\
       xy.x * seno + xy.y * coseno \n\
       ); \n\
        \n\
       float grosor = grosorInicial * float(i + 1); \n\
       float dist = mod(punto.y + grosor * 0.5 - sin(punto.x * frecuencia) * amplitud, divisor); \n\
       float brillo = 0.3 * color.r + 0.4 * color.g + 0.3 * color.b; \n\
        \n\
       if(dist < grosor && brillo < 0.75 - 0.12 * float(i)) \n\
       { \n\
       float k = datosPatron[i].z; \n\
       float x = (grosor - dist) / grosor; \n\
       float fx = abs((x - 0.5) / k) - (0.5 - k) / k; \n\
       gris = min(fx, gris); \n\
       } \n\
       } \n\
        \n\
       fragColor = vec4(gris, gris, gris, 1.0); \n\
        \n\
       } \n\
       void main() { \n\
       vec3 iResolution = vec3(vec2(10, 10) * resolution, 1.0); \n\
       //gl_FragColor = texture2D(u_image, vec2(v_texCoord.x, v_texCoord.y)); \n\
       mainImage(gl_FragColor, v_texCoord*iResolution.xy, iResolution); \n\
        \n\
       } \n\
       ",
    mosaic: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
       vec3 iResolution = vec3(1280, 960, 1.0); \n\
        \n\
       #define S (iResolution.x / 6e1) // The cell size. \n\
        \n\
       void mainImage(out vec4 c, vec2 p) \n\
       { \n\
       c = texture2D(texture, floor((p + .5) / S) * S / iResolution.xy); \n\
       } \n\
        \n\
       void main() { \n\
       mainImage(gl_FragColor, v_texCoord*iResolution.xy); \n\
       } \n\
       ",
    oilpainting: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
        \n\
       const int max_its = 100; \n\
        \n\
       const vec2 src_size = vec2 (1.0 / 480.0, 1.0 / 640.0); \n\
        \n\
       void main () \n\
       { \n\
        \n\
       vec2 uv = v_texCoord; \n\
       float n = float((4 + 1) * (4 + 1)); \n\
       vec3 m0 = vec3(0.0); vec3 m1 = vec3(0.0); vec3 m2 = vec3(0.0); vec3 m3 = vec3(0.0); \n\
       vec3 s0 = vec3(0.0); vec3 s1 = vec3(0.0); vec3 s2 = vec3(0.0); vec3 s3 = vec3(0.0); \n\
       vec3 c; \n\
        \n\
       for (int j = -4; j <= 0; j++)  { \n\
       for (int i = -4; i <= 0; i++)  { \n\
       c = texture2D(texture, uv + vec2(i,j) * src_size).rgb; \n\
       m0 += c; \n\
       s0 += c * c; \n\
       } \n\
       } \n\
        \n\
       for (int j = -4; j <= 0; j++)  { \n\
       for (int i = 0; i <= 4; i++)  { \n\
       c = texture2D(texture, uv + vec2(i,j) * src_size).rgb; \n\
       m1 += c; \n\
       s1 += c * c; \n\
       } \n\
       } \n\
        \n\
       for (int j = 0; j <= 4; j++)  { \n\
       for (int i = 0; i <= 4; i++)  { \n\
       c = texture2D(texture, uv + vec2(i,j) * src_size).rgb; \n\
       m2 += c; \n\
       s2 += c * c; \n\
       } \n\
       } \n\
        \n\
       for (int j = 0; j <= 4; j++)  { \n\
       for (int i = -4; i <= 0; i++)  { \n\
       c = texture2D(texture, uv + vec2(i,j) * src_size).rgb; \n\
       m3 += c; \n\
       s3 += c * c; \n\
       } \n\
       } \n\
        \n\
        \n\
       float min_sigma2 = 1e+2; \n\
       m0 /= n; \n\
       s0 = abs(s0 / n - m0 * m0); \n\
        \n\
       float sigma2 = s0.r + s0.g + s0.b; \n\
       if (sigma2 < min_sigma2) { \n\
       min_sigma2 = sigma2; \n\
       gl_FragColor = vec4(m0, 1.0); \n\
       } \n\
        \n\
       m1 /= n; \n\
       s1 = abs(s1 / n - m1 * m1); \n\
        \n\
       sigma2 = s1.r + s1.g + s1.b; \n\
       if (sigma2 < min_sigma2) { \n\
       min_sigma2 = sigma2; \n\
       gl_FragColor = vec4(m1, 1.0); \n\
       } \n\
        \n\
       m2 /= n; \n\
       s2 = abs(s2 / n - m2 * m2); \n\
        \n\
       sigma2 = s2.r + s2.g + s2.b; \n\
       if (sigma2 < min_sigma2) { \n\
       min_sigma2 = sigma2; \n\
       gl_FragColor = vec4(m2, 1.0); \n\
       } \n\
        \n\
       m3 /= n; \n\
       s3 = abs(s3 / n - m3 * m3); \n\
        \n\
       sigma2 = s3.r + s3.g + s3.b; \n\
       if (sigma2 < min_sigma2) { \n\
       min_sigma2 = sigma2; \n\
       gl_FragColor = vec4(m3, 1.0); \n\
       } \n\
       } \n\
       ",
    watercolour: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
       vec3 iResolution = vec3(1280, 960, 1.0); \n\
        \n\
       vec2 hash2( vec2 p ) \n\
       { \n\
       // procedural white noise \n\
       return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453); \n\
       } \n\
        \n\
       vec2 voronoi( in vec2 x ) \n\
       { \n\
       vec2 n = floor(x); \n\
       vec2 f = fract(x); \n\
        \n\
       //---------------------------------- \n\
       // regular voronoi \n\
       //---------------------------------- \n\
       vec2 mg, mr; \n\
        \n\
       float md = 8.0; \n\
       for( int j=-1; j<=1; j++ ) \n\
       for( int i=-1; i<=1; i++ ) \n\
       { \n\
       vec2 g = vec2(float(i),float(j)); \n\
       vec2 o = hash2( n + g ); \n\
       vec2 r = g + o - f; \n\
       float d = dot(r,r); \n\
        \n\
       if( d<md ) \n\
       { \n\
       md = d; \n\
       mr = r; \n\
       mg = g; \n\
       } \n\
       } \n\
        \n\
       return mr; \n\
       } \n\
        \n\
       vec3 VoronoiColor(float steps, vec2 p, vec2 uv) \n\
       { \n\
       vec2 c = voronoi( steps*p ); \n\
        \n\
       vec2 uv1 = uv; \n\
       uv1.x += c.x/steps; \n\
       uv1.y += c.y/steps *  iResolution.x/iResolution.y; \n\
        \n\
       return texture2D(texture, vec2(uv1.x, uv1.y)).xyz; \n\
       } \n\
        \n\
       void mainImage( out vec4 fragColor, in vec2 fragCoord ) \n\
       { \n\
       vec2 p = fragCoord.xy/iResolution.xx; \n\
       vec2 uv = fragCoord.xy / iResolution.xy; \n\
        \n\
       vec3 color = vec3(0.0,0.0,0.0); \n\
       for (float i=0.0; i<4.0; i+=1.0) \n\
       { \n\
       float steps = 30.0*pow(2.0,i); \n\
       color += VoronoiColor(steps, p, uv); \n\
       } \n\
        \n\
       fragColor = vec4(color*0.25,1.0); \n\
       } \n\
        \n\
       void main() { \n\
       mainImage(gl_FragColor, v_texCoord * iResolution.xy); \n\
       } \n\
       ",
    wrap: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
       vec3 iResolution = vec3(1280, 960, 1.0); \n\
        \n\
        \n\
       float mod289(float x) \n\
       { \n\
       return x - floor(x * (1.0 / 289.0)) * 289.0; \n\
       } \n\
        \n\
       vec4 mod289(vec4 x) \n\
       { \n\
       return x - floor(x * (1.0 / 289.0)) * 289.0; \n\
       } \n\
        \n\
       vec4 perm(vec4 x) \n\
       { \n\
       return mod289(((x * 34.0) + 1.0) * x); \n\
       } \n\
        \n\
       float noise3d(vec3 p) \n\
       { \n\
       vec3 a = floor(p); \n\
       vec3 d = p - a; \n\
       d = d * d * (3.0 - 2.0 * d); \n\
        \n\
       vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0); \n\
       vec4 k1 = perm(b.xyxy); \n\
       vec4 k2 = perm(k1.xyxy + b.zzww); \n\
        \n\
       vec4 c = k2 + a.zzzz; \n\
       vec4 k3 = perm(c); \n\
       vec4 k4 = perm(c + 1.0); \n\
        \n\
       vec4 o1 = fract(k3 * (1.0 / 41.0)); \n\
       vec4 o2 = fract(k4 * (1.0 / 41.0)); \n\
        \n\
       vec4 o3 = o2 * d.z + o1 * (1.0 - d.z); \n\
       vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x); \n\
        \n\
       return o4.y * d.y + o4.x * (1.0 - d.y); \n\
       } \n\
        \n\
       void mainImage( out vec4 fragColor, in vec2 fragCoord ) \n\
       { \n\
       vec2 uv = fragCoord.xy; \n\
       float v1 = noise3d(vec3(uv * 10.0, 0.0)); \n\
       float v2 = noise3d(vec3(uv * 10.0, 1.0)); \n\
        \n\
       vec4 color  = texture2D(texture, uv + vec2(v1, v2) * 0.1); \n\
       fragColor = color; \n\
       } \n\
        \n\
       void main() { \n\
       mainImage(gl_FragColor, v_texCoord); \n\
       } \n\
       ",
    xray: "\n\
       precision mediump float; \n\
        \n\
       varying vec2 v_texCoord; \n\
       varying vec2 v_coordinateOrn1; \n\
       varying vec2 v_coordinateOrn2; \n\
       varying vec2 v_coordinateOrn3; \n\
       varying vec2 v_coordinateOrn4; \n\
       varying vec2 v_coordinateOrn5; \n\
       varying vec2 v_coordinateOrn6; \n\
       varying vec2 v_coordinateOrn7; \n\
        \n\
       uniform sampler2D texture; \n\
       uniform sampler2D frameOrn1; \n\
       uniform sampler2D frameOrn2; \n\
       uniform sampler2D frameOrn3; \n\
       uniform sampler2D frameOrn4; \n\
       uniform sampler2D frameOrn5; \n\
       uniform sampler2D frameOrn6; \n\
       uniform sampler2D frameOrn7; \n\
        \n\
        \n\
       void mainImage( out vec4 fragColor, in vec2 fragCoord ) \n\
       { \n\
       vec2 uv = fragCoord.xy; \n\
        \n\
       vec3 tex = texture2D( texture, uv ).rgb; \n\
       float shade = dot(tex, vec3(0.333333)); \n\
        \n\
       vec3 col = mix(vec3(0.1, 0.36, 0.8) * (1.0-2.0*abs(shade-0.5)), vec3(1.06, 0.8, 0.55), 1.0-shade); \n\
        \n\
       fragColor = vec4(col,1.0); \n\
       } \n\
        \n\
       void main() { \n\
       mainImage(gl_FragColor, v_texCoord); \n\
       } \n\
       ",
    }