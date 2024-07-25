# 优化器
    optimizer = torch.optim.Adam([t1,t2,t3,t4,t5,t6], lr=lr)
    
    # 进行优化
    for epoch in range(interval):    
        optimizer.zero_grad()
        loss = loss_function(t1,t2,t3,t4,t5,t6)
        loss.backward()
        optimizer.step()
        if epoch%100==0:
            print(f'Epoch {epoch}, Loss {loss.item()}')
        if loss.item()<maxerror:
            print("minloss:",loss.item())
            break
minloss: 0.0009870927315205336
dx,dy,dz error: Matrix([[-0.0145334085096351], [-0.00555758762822034], [-0.0203845457565990]
t1 = torch.tensor([j1],requires_grad=True, dtype=torch.float32,device=device)
    t2 = torch.tensor([j2],requires_grad=True, dtype=torch.float32,device=device)
    t3= torch.tensor([j3],requires_grad=True, dtype=torch.float32,device=device)
    t4 = torch.tensor([j4],requires_grad=True, dtype=torch.float32,device=device)
    t5 = torch.tensor([j5],requires_grad=True, dtype=torch.float32,device=device)
    t6 = torch.tensor([j6],requires_grad=True, dtype=torch.float32,device=device)

    
