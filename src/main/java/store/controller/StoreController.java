package store.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpSession;
import store.bean.CartDTO;
import store.bean.StoreDTO;
import store.bean.UserDTO;
import store.service.StoreService;
import java.io.File;
import java.io.IOException;

@CrossOrigin
@RestController //@RestController = @Controller + @ResponseBody
@RequestMapping(value = "store")
public class StoreController {
	@Autowired
	private StoreService storeService;
	
	@GetMapping(path = "getStoreList")
	public List<StoreDTO> getStoreList() {
		return storeService.getStoreList();
	}
	
	@GetMapping(path = "getPopcornList")
	public List<StoreDTO> getPopcornList(@RequestParam String category) {
		System.out.println(category);
		return storeService.getPopcornList(category);
	}
	
	@PostMapping(path = "write")
	public void write(@ModelAttribute StoreDTO storeDTO) {
		storeService.write(storeDTO);
	}
	
	@GetMapping(path = "isExistSubject")
	public String isExistSubject(@RequestParam String subject) {
		System.out.println(subject);
		return storeService.isExistSubject(subject);
	}
	
	@GetMapping(path = "getStore")
	public Optional<StoreDTO> getStore(@RequestParam int store_seq) {
		return storeService.getStore(store_seq);
	}
	
	// name="img" 1개 이상일 경우
	@PostMapping(value = "/imgUpload")
	@ResponseBody
	public void upload(@RequestParam MultipartFile img, HttpSession session) {
		//실제폴더
		String filePath = session.getServletContext().getRealPath("/public/storage");
		System.out.println("실제폴더 : "+filePath);
		String fileName = img.getOriginalFilename();
		
		File file = new File(filePath, fileName);
		
		try {
			//FileCopyUtils.copy(upload.getInputStream(), new FileOutputStream(file)); // 가상폴더로 복사한다
			img.transferTo(file);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}//복사
	}
	
	//usertable 이용
	@PostMapping(path = "login")
	public UserDTO login(@ModelAttribute UserDTO userDTO) {
		return storeService.login(userDTO);
	}
	
	//carttable 이용
	@PostMapping(path = "insertCart")
	public void insertCart(@ModelAttribute CartDTO cartDTO) {
		storeService.insertCart(cartDTO);
	}
	
	@GetMapping(path = "isExistCart")
	public String isExistCart(@RequestParam String userName, String store_seq) {
		System.out.println(store_seq);
		return storeService.isExistCart(userName, store_seq);
	}
	
}
