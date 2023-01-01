package store.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "paytable")
@SequenceGenerator(name = "PAY_SEQ_GENERATOR"
				 , sequenceName = "PAY_SEQ"
				 , initialValue = 1
				 , allocationSize = 1
)
public class PayDTO {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PAY_SEQ_GENERATOR")
	@Column(name = "pay_seq")
	private int pay_seq;
	
	@Column(name="cart_seq", nullable = false, length = 30)
	private int cart_seq;
	
	@Column(name="count", nullable = false, length = 30)
	private int count;
	
	@Column(name="store_seq", nullable = false, length = 30)
	private int store_seq;
	
	@Column(name="subject", nullable = false, length = 30)
	private String subject;
	
	@Column(name="subsubject", nullable = false, length = 30)
	private String subSubject;
	
	@Column(name="price", nullable = false, length = 30)
	private String price;
	
	@Column(name="img")
	private String img;
	
	@Column(name="username", nullable = false, length = 30)
	private String userName;
	
}
