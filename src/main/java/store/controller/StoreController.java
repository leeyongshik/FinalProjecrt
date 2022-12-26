package store.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import store.bean.StoreDTO;
import store.service.StoreService;

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
	
	@PostMapping(path = "write")
	public void write(@ModelAttribute StoreDTO storeDTO) {
		storeService.write(storeDTO);
	}
	
	@GetMapping(path = "isExistSubject")
	public String isExistSubject(@RequestParam String subject) {
		System.out.println(subject);
		return storeService.isExistSubject(subject);
	}
	
}
