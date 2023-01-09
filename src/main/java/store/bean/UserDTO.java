package store.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "usertable")
//@SequenceGenerator(name = "MEMBER_SEQ_GENERATOR"
//				 , sequenceName = "MEMBER_SEQ"
//				 , initialValue = 1
//				 , allocationSize = 1
//)
public class UserDTO {
	@Id
	@Column(name="username")
	private String userName;
	
	@Column(name="password", nullable = false)
	private String password;
	
	@Column(name="name")
	private String name;
	
	@Column(name="phoneNumber")
	private String phoneNumber;
}
