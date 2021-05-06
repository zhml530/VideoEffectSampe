function onloadImage(imageSrc){
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = imageSrc
  })
}

function resizeCanvas(canvas, width, height){
  canvas.width = width
  canvas.height = height
}

function drawPath(ctx, points, closePath) {
  const region = new Path2D();
  region.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point[0], point[1]);
  }

  if (closePath) {
    region.closePath();
  }
  ctx.stroke(region);
}


function rotate_x(x, y, x0, y0, angle){                                                                                                                                                                                                            
  return (x - x0) * Math.cos(angle) - (y-y0) * Math.sin(angle) + x0;                                                                                                                                                                                                                   
}                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                             
function rotate_y(x, y, x0, y0, angle){                                                                                                                                                                                                             
 return (x - x0) * Math.sin(angle) + (y-y0) * Math.cos(angle) + y0;                                                                                                                                                                                                                    
} 


function ApplyTransform(screen_x, screen_y, origin_x, origin_y, angle, s, x, y, vert){  
  if (vert.length != 8){
    alert("vertex should has 8 elements but get: ", vert.length)
  }

  //step1: keep aspect ratio                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  var R = ( screen_x / screen_y ) / (origin_x / origin_y);                                                                                                                                                                                                            
  var delta_ar = (R - 1 ) / 2;                                                                                                                                                                                                                                        
  var vertices_kar = [                                                                                                                                                                                                                                         
          vert[0] - delta_ar, vert[1],                                                                                                                                                                                                                                  
          vert[2] + delta_ar, vert[3],                                                                                                                                                                                                                                  
          vert[4] - delta_ar, vert[5],                                                                                                                                                                                                                                  
          vert[6] + delta_ar, vert[7],                                                                                                                                                                                                                                  
  ];                                                                                                                                                                                                                                                                    
  //step2: scale                                                                                                                                                                                                                                                        
  var delta_h = 0.5 / s - 0.5;                                                                                                                                                                                                                                        
  var delta_w = ( 0.5 + (R - 1) / 2) / s - (0.5 + (R-1)/2);                                                                                                                                                                                                           
  var vertices_kar_s = [                                                                                                                                                                                                                                         
          vertices_kar[0] - delta_w, vertices_kar[1] - delta_h,                                                                                                                                                                                                         
          vertices_kar[2] + delta_w, vertices_kar[3] - delta_h,                                                                                                                                                                                                         
          vertices_kar[4] - delta_w, vertices_kar[5] + delta_h,                                                                                                                                                                                                         
          vertices_kar[6] + delta_w, vertices_kar[7] + delta_h,                                                                                                                                                                                                         
  ];                                                                                                                                                                                                                                                                    
  //step3: translate                                                                                                                                                                                                                                                    
  var delta_w_translate = 0.5 - vertices_kar_s[0] - x * (vertices_kar_s[2] - vertices_kar_s[0]);                                                                                                                                                                      
  var delta_h_translate = 0.5 - vertices_kar_s[1] - y * (vertices_kar_s[5] - vertices_kar_s[1]);                                                                                                                                                                      
                                                                                                                                                                                                                                                                        
  var vertices_kar_s_t = [
          vertices_kar_s[0] + delta_w_translate, vertices_kar_s[1] - delta_h_translate,                                                                                                                                                                                 
          vertices_kar_s[2] + delta_w_translate, vertices_kar_s[3] - delta_h_translate,                                                                                                                                                                                 
          vertices_kar_s[4] + delta_w_translate, vertices_kar_s[5] - delta_h_translate,                                                                                                                                                                                 
          vertices_kar_s[6] + delta_w_translate, vertices_kar_s[7] - delta_h_translate,                                                                                                                                                                                 
  ];                                                                                                                                                                                                                                                                    
  //step4: rotate                                                                                                                                                                                                                                                       
  var vertices_kar_s_t_r = [              
    rotate_x(vertices_kar_s_t[0], vertices_kar_s_t[1], 0.5, 0.5, angle), rotate_y(vertices_kar_s_t[0], vertices_kar_s_t[1], 0.5, 0.5, angle),                                                                                                                                                                                                           
    rotate_x(vertices_kar_s_t[2], vertices_kar_s_t[3], 0.5, 0.5, angle), rotate_y(vertices_kar_s_t[2], vertices_kar_s_t[3], 0.5, 0.5, angle),
    rotate_x(vertices_kar_s_t[4], vertices_kar_s_t[5], 0.5, 0.5, angle), rotate_y(vertices_kar_s_t[4], vertices_kar_s_t[5], 0.5, 0.5, angle),
    rotate_x(vertices_kar_s_t[6], vertices_kar_s_t[7], 0.5, 0.5, angle), rotate_y(vertices_kar_s_t[6], vertices_kar_s_t[7], 0.5, 0.5, angle)
  ]                                                                                                                                                                     
return vertices_kar_s_t_r;                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                        
}

function eulDist(x1, y1, x2, y2){
  return Math.pow(Math.pow(x2-x1, 2) + Math.pow(y2 - y1, 2), 0.5);
}

function isMouthOpen(landmarks, thr){
  var left_lip_upper_id = 37, left_lip_lower_id = 84, right_lip_upper_id = 267, right_lip_lower_id = 314, left_lip_id = 61, right_lip_id = 291;
  var left_lip_height = eulDist(landmarks[left_lip_upper_id][0], landmarks[left_lip_upper_id][1], landmarks[left_lip_lower_id][0], landmarks[left_lip_lower_id][1]);
  var right_lip_height = eulDist(landmarks[right_lip_upper_id][0], landmarks[right_lip_upper_id][1], landmarks[right_lip_lower_id][0], landmarks[right_lip_lower_id][1]);
  var lip_width = eulDist(landmarks[left_lip_id][0], landmarks[left_lip_id][1], landmarks[right_lip_id][0], landmarks[right_lip_id][1]);

  var ratio = (left_lip_height + right_lip_height) / (2 * lip_width);
  return ratio > thr;
}
