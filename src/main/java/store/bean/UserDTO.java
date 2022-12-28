package store.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "usertable")
public class UserDTO {
	@Id
	@Column(name="username")
	private String userName;
	
	@Column(name="password", nullable = false, length = 30)
	private String password;
}
